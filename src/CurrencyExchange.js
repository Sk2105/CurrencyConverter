import { useEffect, useState } from "react";

function useCurrencyExchange(currency) {
  const [currencyExchangeData, setCurrencyExchangeData] = useState({});

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/d9b7e0e6eda13e13180bc12a/latest/" +
        currency
    )
      .then((res) => res.json())
      .then((currencyExchange) =>
        setCurrencyExchangeData(currencyExchange["conversion_rates"])
      )
      .catch((err) => console.log(err));
  }, [currency]);

  console.log(currencyExchangeData);
  return currencyExchangeData;
}

export default useCurrencyExchange;
