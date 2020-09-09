import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Bar, Pie, Line } from "react-chartjs-2";


const Dashboard = ({ consumers, stores, products, orders }) => {
    const [chartData, setChartData] = useState({});
    const [itemsSold, setItemsSold] = useState(0);
    const [totalSales, setTotalSales] = useState(0);
    const [avgSalesPerStore, setAvgSalesPerStore] = useState(0);
    const [salesPerStore, setSalesPerStore] = useState([{}]);

    let leaderProducts = [{}];
    let ordersThisWeek = [{}]

    useEffect(() => {
        let salesPerProductID = [{}];
        let salesPerStore = [{}];
        //let filteredSalesPerStore = [{}];

        if (consumers && stores && products && orders) {
            consumers.length > 0 ? console.log('consumers: ', consumers) : console.log('');
            stores.length > 0 ? console.log('stores: ', stores) : console.log('');
            products.length > 0 ? console.log('products: ', products) : console.log('');
            orders.length > 0 ? (console.log('orders: ', orders)) : console.log('');
            if (orders.length > 0) {
                let itemsCount = 0;
                let salesSum = 0;
                let avgSales = 0;

                orders.forEach(order => {
                    itemsCount += order.products.length;
                    salesSum += order.totalAmount;
                    stores.length > 0 ? avgSales = salesSum / stores.length : avgSales = 0;

                    // Get sales per product id sold
                    order.products.forEach((product) => {
                        salesPerProductID.push({
                            productID: product._id,
                            sales: parseFloat(product.quantity) * parseFloat(product.price)
                        });
                    });
                });

                // Get store's products ids
                if (stores.length > 0) {
                    //stores.forEach((store) => {
                    //store.products.forEach((product) => {
                    salesPerProductID.forEach((salePerID) => {
                        stores.forEach((store) => {
                            store.products.forEach((product) => {
                                if (salePerID.productID === product) {
                                    //console.log(salePerID.productID + ' === ' + product);
                                    //order.products.forEach((orderProduct) => {
                                    salesPerStore.push({
                                        storeName: store.storeName,
                                        amount: salePerID.sales
                                    });
                                    //});
                                }
                            });
                        });

                    });
                    //});
                    //});
                }

                //console.log('salesPerProductID: ', salesPerProductID);
                //console.log('salesPerStore: ', salesPerStore);
                //console.log('filteredSalesPerStore: ', filteredSalesPerStore);
                let salesPerStore2 = [{}];

                stores.forEach((store) => {
                    let storeAmount = 0;
                    salesPerStore.forEach((salePerStore) => {
                        if (salePerStore.storeName === store.storeName) {
                            //console.log('salePerStore: ', salePerStore);
                            //console.log('parseFloat(salePerStore.amount): ', parseFloat(salePerStore.amount));
                            storeAmount += parseFloat(salePerStore.amount);
                            //console.log('storeAmount: ', storeAmount);
                        }
                    });

                    salesPerStore2.push({
                        storeName: store.storeName,
                        amount: parseFloat(storeAmount)
                    });
                });
                console.log('salesPerStore2: ', salesPerStore2);

                setItemsSold(itemsCount);
                setTotalSales(salesSum);
                setAvgSalesPerStore(numberWithCommas(avgSales.toFixed(2)));
                setSalesPerStore(salesPerStore2);
            }
        }

        chart();
    }, [consumers, stores, products, orders]);


    // Number with thousands separation
    // Source: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const chart = () => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        });
    };



    return (
        <div>
            <h4>
                <strong>Marketplace Dashboard</strong>
            </h4>

            <Row>
                <Col>
                    <Card>
                        <Card.Header className="py-1">Total Registered</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <p>Users: {consumers.length || '0'}</p>
                                <p>Stores: {stores.length || '0'}</p>
                                <p>Products: {products.length || '0'}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="py-1">Items Sold</Card.Header>
                        <Card.Body>
                            <Card.Title className="mb-0">{itemsSold}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="py-1">Total Sales</Card.Header>
                        <Card.Body>
                            <Card.Title className="mb-0">$ {numberWithCommas(totalSales)}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="py-1">Average Sales Per Store</Card.Header>
                        <Card.Body>
                            <Card.Title className="mb-0">${avgSalesPerStore}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="py-1">Sales Per Store</Card.Header>
                        <Card.Body className="p-1">
                            <div style={{ width: "100%" }}>
                                <Bar
                                    data={chartData}
                                    options={{
                                        responsive: true,
                                    }}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="py-1">Leader Products</Card.Header>
                        <Card.Body className="p-1">
                            <div style={{ width: "100%" }}>
                                <Pie
                                    data={chartData}
                                    options={{
                                        responsive: true,
                                    }}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="text-center">
                        <Card.Header className="py-1">Orders This Week</Card.Header>
                        <Card.Body className="p-1">
                            <div style={{ width: "100%", height: '50%' }}>
                                <Line
                                    data={chartData}
                                    options={{
                                        responsive: true,
                                    }}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
