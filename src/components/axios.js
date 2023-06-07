import axios from 'axios'
import{baseUrl} from'./constent/Constant.js'
const instance = axios.create({
    baseURL: baseUrl
  });
  export default instance