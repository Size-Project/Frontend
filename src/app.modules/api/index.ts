import axios from 'axios';

export let axiosClient = axios.create({
  // baseURL: 'http://ohouse-api.duckdns.org:8080',
});

axiosClient.defaults.withCredentials = true;

class API {
  async CALL({ method, url, headers, data = null }: any) {
    const response = axiosClient({
      url,
      method,
      data,
      headers,
    });

    response.catch((error) => {
      console.log(error?.response?.status);
      if (error.response && error.response.status === 401) {
        // 로그인 쿠키 제거
        // authClient.removeCookie();
        // location.href = '/error/errorAuth';
      }

      console.error('#error-client-axios: ', error);
    });
    return response;
  }

  GET(url: string, headers?: any) {
    return this.CALL({
      method: 'GET',
      url,
      headers,
    });
  }

  POST({ url, ...params }: any) {
    return this.CALL({
      method: 'POST',
      url,
      ...params,
    });
  }

  PUT({ url, ...params }: any) {
    return this.CALL({
      method: 'PUT',
      url,
      ...params,
    });
  }

  DELETE({ url, ...params }: any) {
    return this.CALL({
      method: 'DELETE',
      url,
      ...params,
    });
  }
}

export default new API();
