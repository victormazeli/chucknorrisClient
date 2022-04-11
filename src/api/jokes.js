import axios from "axios";

export default axios.create({
  baseURL: "http://test-task-jokes.herokuapp.com/jokes/",
});
