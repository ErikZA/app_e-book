import axios from "axios";

const baseUrl = " https://my-events-controll.herokuapp.com";
const commonConfigs = {
  /*timeout: 12000000*/
};

const apiPublic = axios.create({ baseURL: baseUrl, ...commonConfigs });

const apiPrivate = axios.create({ baseURL: baseUrl, ...commonConfigs });

// apiPrivate.interceptors.request.use( config => {
//     config.auth = `Bearer ${global?.store?.getState()?.auth?.user?.token}`
// })

export { apiPublic, apiPrivate };
