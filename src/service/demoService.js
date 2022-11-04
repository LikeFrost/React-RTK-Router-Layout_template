import axios from 'axios';

export default {
    async getDemo() {
        return await axios.get('/api');
    }
}