import axios from "axios";

const instance = axios.create({
    baseURL: "https://tinder-bk-end.herokuapp.com",
});

export default instance;