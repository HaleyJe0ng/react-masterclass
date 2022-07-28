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

export function fetchCoinHistory(coinId: string) {
  //   const endDate = Math.floor(Date.now() / 1000);
  //   const startDate = endDate - 60 * 60 * 24 * 7; //일주일을 초로 나타냄
  //  `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}&start=${startDate}&end=${endDate}`
  return axios
    .get(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`)
    .then((response) => response.data)
    .catch((e) => console.log(e));
}

//json data의 promise 반환
