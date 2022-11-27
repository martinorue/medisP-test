import axios from "axios";

const fetchData = async () => {
    const res = await axios.get("http://jsonplaceholder.typicode.com/posts/1/comments");
    return res.data;
}

export default fetchData