const Actions = {
  FETCH_COINS_REQUEST: "FETCH_COINS_REQUEST",
  FETCH_COINS_REQUEST_LOADING: "FETCH_COINS_REQUEST_LOADING",
  FETCH_COINS_REQUEST_SUCCESS: "FETCH_COINS_REQUEST_SUCCESS",
  FETCH_COINS_REQUEST_FAIL: "FETCH_COINS_REQUEST_FAIL",
  FETCH_COIN_DETAILS_REQUEST: "FETCH_COIN_DETAILS_REQUEST",
  FETCH_COIN_DETAILS_REQUEST_SUCCESS: "FETCH_COIN_DETAILS_REQUEST_SUCCESS",
  FETCH_COIN_DETAILS_REQUEST_FAIL: "FETCH_COIN_DETAILS_REQUEST_FAIL",
  FETCH_COIN_DETAILS_LOADING: "FETCH_COIN_DETAILS_LOADING",
  FETCH_COIN_CHART_DATA_LOADING: "FETCH_COIN_CHART_DATA_LOADING",
  FETCH_COIN_CHART_DATA_REQUEST: "FETCH_COIN_CHART_DATA_REQUEST",
  FETCH_COIN_CHART_DATA_REQUEST_SUCCESS:
    "FETCH_COIN_CHART_DATA_REQUEST_SUCCESS",
  FETCH_COIN_CHART_DATA_REQUEST_FAIL: "FETCH_COIN_CHART_DATA_REQUEST_FAIL",
};

const fetchCoins = (payload) => ({
  type: Actions.FETCH_COINS_REQUEST,
  payload,
});

const fetchCoinDetails = (payload) => ({
  type: Actions.FETCH_COIN_DETAILS_REQUEST,
  payload,
});

const fetchCoinChartData = (payload) => ({
  type: Actions.FETCH_COIN_CHART_DATA_REQUEST,
  payload,
});

export { Actions, fetchCoins, fetchCoinDetails, fetchCoinChartData };