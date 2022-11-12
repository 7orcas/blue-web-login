import axios, { AxiosRequestHeaders } from 'axios';
import UrlSearchParams from './urlSearchParams';

const params = new UrlSearchParams()

// let headers : AxiosRequestHeaders = {
//   'Access-Control-Allow-Origin': 'origin, content-type, Content-Disposition, accept, authorization, Access-Control-Allow-Origin'
// }
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'origin, content-type, Content-Disposition, accept, authorization, Access-Control-Allow-Origin'

export default axios.create({
    // baseURL: params.getUrl() + '/blue/blue-login',
    baseURL: 'http://localhost:8080/blue/rest-api-x', //DEVELOPMENT ONLY, WON'T CONNECT TO blue-web
});
