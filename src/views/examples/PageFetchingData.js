import React from 'react';
import { ApiQuery } from 'components/api';

function PageFetchingData({ apiData }) {
  return apiData.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

export default ApiQuery(PageFetchingData, `
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`);
