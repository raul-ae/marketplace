import axios from "axios";

export default {

  // ********** Products **********
  // Gets all 
  getProducts: function () {
    return axios.get("/api/products");
  },
  // Gets one with the id
  getProduct: function (id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes one with the id
  deleteProduct: function (id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves to the database
  saveProduct: function (productData) {
    return axios.post("/api/products", productData);
  },

  // ********** Categories **********
  getCategories: function () {
    return axios.get("/api/categories");
  },
  getCategory: function (id) {
    return axios.get("/api/categories/" + id);
  },
  deleteCategory: function (id) {
    return axios.delete("/api/categories/" + id);
  },
  saveCategoy: function (categoryData) {
    return axios.post("/api/categories", categoryData);
  }
};
