import axios from "axios";

export default {
  user: {
    signup: addUser =>
      axios
        .post("/api/users/signup", { addUser })
        .then(res => res.data)
  }
}
