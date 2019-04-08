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
  }
}
