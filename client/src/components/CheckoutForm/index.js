import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import './CheckoutForm.css'
import API from '../../utils/API';
import {Redirect} from "react-router-dom";

export default function CheckoutForm({ consumer }) {
  // Set up the state
  // Initialize some state to keep track of the payment, show errors, and manage the user interface.
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const [confirmation, setConfirmation]= useState("")

  // const [order, setOrder] = useState({});

  let localProducts = [];
  let stores = [];
  let storeIDs = [];
  let shipping = 100;


  useEffect(() => {
    if (succeeded) {
      getLocalStoragePdts();
      loadStores();
    }
  }, [succeeded]);

  /* useEffect(() => {
    if (order.length > 0) {
      console.log('useEffect - order: ', order);
      saveOrder();
    }
  }, [order]); */

  const getLocalStoragePdts = () => {
    // console.log('localStorage.length: ', localStorage.length);
    for (let i = 0; i < localStorage.length; i++) {
      let id = localStorage.key(i);
      let product = JSON.parse(localStorage.getItem(id));
      if (typeof (product) === 'object') {
        localProducts.push(product);
      }
      // console.log('productName: ', product.productName);
    }
    // console.log('localProducts: ', localProducts);
    // setlocalStorageProducts(localProducts);
  }

  const loadStores = () => {
    API.getStores()
      .then(res => {
        // setStores(res.data);
        stores = [...res.data];
        // console.log('loadStores - res.data: ', res.data);
        // console.log('loadStores - stores: ', stores);
        getStoresIdsAndTotalAmount();
      })
      .catch(err => console.log(err));
  };

  const getStoresIdsAndTotalAmount = () => {
    // console.log('getMatchedStoresIds()');
    // console.log('localProducts: ', localProducts);
    // console.log('stores: ', stores);
    let totalAmount = 0;
    localProducts.forEach((product) => {
      totalAmount += parseFloat(product.quantity) * parseFloat(product.price);
      stores.forEach((store) => {
        store.products.forEach((storeProduct) => {
          // console.log(product._id + ' === ' + storeProduct);
          if (product._id === storeProduct) {
            storeIDs.push(store._id);
          }
        });
      });
    });
    totalAmount += shipping;
    // console.log('getMatchedStoresIds - storeIDs: ', storeIDs);
    let uniqueStoreIDs = storeIDs.filter(onlyUnique);
    // console.log('getMatchedStoresIds - uniqueStoreIDs: ', uniqueStoreIDs);
    // console.log('getMatchedStoresIds - totalAmount: ', totalAmount);
    createOrderObject(uniqueStoreIDs, totalAmount);
  }

  // Return only unique values of an array
  // Source: https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
  // usage example:
  // var a = ['a', 1, 'a', 2, '1'];
  // var unique = a.filter(onlyUnique); // returns ['a', 1, 2, '1']
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }



  const createOrderObject = (uniqueStoreIDs, totalAmount) => {
    let orderObject = {
      products: localProducts,
      storeID: uniqueStoreIDs,
      customerID: consumer._id,
      orderStatus: 'Payed',
      totalAmount: totalAmount,
      deliveryAddress: consumer.consumerAddress
    }
    // setOrder(orderObject);
    console.log('createOrderObject - orderObject: ', orderObject);
    // console.log('createOrderObject - order: ', order);
    saveOrder(orderObject);
  }

  const saveOrder = (orderObject) => {
    // console.log('saveOrder - order: ', order);
    API.saveOrder(orderObject)
      .then(res => {
        console.log('Order saved - res.data: ', res.data);
        loadOrders();
        setTimeout(() => {
          setConfirmation("Confirmed");
        }, 3000);
      })
      .catch(err => console.log(err));
  }

  const loadOrders = () => {
    API.getOrders()
      .then(res => {
        // setOrders(res.data);
        console.log('loadOrders - res.data: ', res.data);
      }
      )
      .catch(err => console.log(err));
  }



  // Store a reference to Stripe
  // Access the Stripe library in your CheckoutForm component by using the useStripe() and useElements() hooks. If you need to access Elements via a class component, use the ElementsConsumer instead.
  const stripe = useStripe();
  const elements = useElements();

  // Fetch a PaymentIntent
  // Immediately make a request to the endpoint on your server to create a new PaymentIntent as soon as your checkout page loads. The clientSecret returned by your endpoint is used to complete the payment.
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  // Optional: Style the card input
  // Stripe embeds an iframe to securely collect card details. Customize the iframe by passing a style object. Use your company's color scheme and font to make it match with the rest of your checkout page. Use custom fonts (e.g. from Google Fonts) by initializing Elements with a font set.
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {},
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  // Optional: Surface card errors
  // Define a function to listen for changes to the card input. Immediately surface card errors (e.g. expiry date in the past) and disable the button if the input is empty.
  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  // Complete the payment
  //When your customer clicks the pay button, call confirmCardPayment() with the PaymentIntent client secret and CardElement. If the card requires authentication, e.g. the bank sends the customer a one-time passcode, Stripe automatically displays a modal prompting the user for the details.
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  // Add a CardElement
  // Add a CardElement to your payment form, which embeds an iframe with the necessary input fields to collect the card data. This creates a single input that collects the card number, expiry date, CVC, and postal code. Elements displays localized placeholder text of the postal code field based on your customer's browser locale (e.g. showing "ZIP" for U.S. cardholders, "Postcode" for U.K. cardholders).

  return (
    <>
    {confirmation==="Confirmed"? 
        <Redirect push to="/home/confirmation"/>:
        ""}
    <div className='root'>
      <div className='body'>
        <form id="payment-form" onSubmit={handleSubmit}>
          <CardElement
            id="card-element"
            options={cardStyle}
            onChange={handleChange}
          />
          <button disabled={processing || disabled || succeeded} id="submit">
            <span id="button-text">
              {processing ? <div className="spinner" id="spinner"></div> : "Confirm your purchase"}
            </span>
          </button>
          {/* Show any error that happens when processing the payment */}
          {error && (
            <div className="card-error" role="alert">
              {error}
            </div>
          )}
          {/* Show a success message upon completion */}
          <p className={succeeded ? "result-message" : "result-message hidden"}>
            Payment succeeded, see the result in your
        <a href={`https://dashboard.stripe.com/test/payments`}>
              {" "}
          Stripe dashboard.
        </a>{" "}
        Refresh the page to pay again.
      </p>
        </form>
      </div>
    </div>
    </>
  );
}

// Show a success message
// If no error occurred, tell your customer the payment was successful! For any important post-payment actions (like shipping packages, sending email receipts) we recommend setting up a webhook.