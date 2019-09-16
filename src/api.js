import axios from "axios";

export default {
  user: {
    signup: addUser =>
      axios
        .post("/api/users/signup", { addUser })
        .then(res => res.data),
    login: credentials =>
      axios
        .post("/api/users/login", { credentials })
        .then(res => res.data)
  },
  menu: {
    fetchMenu: () =>
      axios
        .get("/api/menus/menu")
        .then(res => res.data),
    fetchSingleMenu: id =>
      axios
        .get(`/api/menus/menu/${id}`)
        .then(res => res.data),
    newMenu: formData =>
      axios
        .post("/api/menus/menu", formData)
        .then(res => res.data),
    updateMenu: (putMenu, id) =>
      axios
        .put(`/api/menus/menu/${id}`, { putMenu })
        .then(res => res.data),
    deleteMenu: id =>
      axios
        .delete(`/api/menus/menu/${id}`)
        .then(res => res.data),
    fetchMenuByCategory: category =>
      axios
        .get(`/api/menus/category/${category}`)
        .then(res => res.data)
  },
  order: {
    makeOrder: addOrder =>
      axios
        .post("/api/orders/order", { addOrder })
        .then(res => res.data),
    getOrders: () =>
      axios
        .get("/api/orders/orders/user")
        .then(res => res.data),
    adminGetOrders: () =>
      axios
        .get("/api/orders/orders")
        .then(res => res.data),
    acceptOrder: id =>
      axios
        .post(`/api/orders/accept/${id}`)
        .then(res => res.data),
    getOrder: id =>
      axios
        .get(`/api/orders/order/${id}`)
        .then(res => res.data),
    declineOrder: id =>
      axios
        .post(`/api/orders/reject/${id}`)
        .then(res => res.data),
    completeOrder: id =>
      axios
        .post(`/api/orders/complete/${id}`)
        .then(res => res.data),
    deleteOrder: id =>
      axios
        .delete(`/api/orders/order/${id}`)
        .then(res => res.data)
  }
}
