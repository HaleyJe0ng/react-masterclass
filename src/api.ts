import axios from "axios";

const BASE_URL = "https://api.coinpaprika.com/v1";

export function fetchCoins() {
  return axios
    .get(`${BASE_URL}/coins`)
    .then((response) => response.data) //json 형식의 데이터를 반환
    .catch((e) => console.log(e));
}

export function fetchInfoData(coinId: string) {
  return axios
    .get(`${BASE_URL}/coins/${coinId}`)
    .then((response) => response.data)
    .catch((e) => console.log(e));
}

export function fetchPriceData(coinId: string) {
  return axios
    .get(`${BASE_URL}/tickers/${coinId}`)
    .then((response) => response.data)
    .catch((e) => console.log(e));
}

//json data의 promise 반환
