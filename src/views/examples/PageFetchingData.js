import React from 'react';
import { ApiQuery } from 'components/api';

let currency = 'USD';

function PageFetchingData({ apiData, refetch }) {
  // NOTE this is quite a bad example of state managements
  // since we are in stateless component. For the sake of
  // showing how to handle variables in queries.
  const updateCurrency = ({ target: { value }}) => {
    currency = value;
  }
  const fetchRates = (e) => {
    e.preventDefault();
    refetch({ currency })
  }
  return (
    <>
      <form onSubmit={fetchRates}>
        <input type="text" defaultValue={currency} onChange={updateCurrency} />
      </form>
      {apiData.rates?.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ))}
    </>
  )
}

export default ApiQuery(PageFetchingData, `
  query ($currency: String!) {
    rates(currency: $currency) {
      currency
      rate
    }
  }
`, {
  variables: { currency }
});
