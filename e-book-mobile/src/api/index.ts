import axios from "axios";

const baseUrl = "http://localhost:3333";
const commonConfigs = { timeout: 120000 };

const apiPublic = axios.create({ baseURL: baseUrl, ...commonConfigs });

const apiPrivate = axios.create({ baseURL: baseUrl, ...commonConfigs });

// apiPrivate.interceptors.request.use( config => {
//     config.auth = `Bearer ${global?.store?.getState()?.auth?.user?.token}`
// })

export { apiPublic, apiPrivate };
