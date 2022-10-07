import axios from 'axios';

export default axios.create({
    baseURL: `https://nativapps-movie-node.vercel.app/api/v1/`
});