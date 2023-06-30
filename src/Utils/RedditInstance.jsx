import axios from "axios";
const URL = 'https://www.reddit.com/r/reactjs.json'
export default axios.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
