const PriceChangeTable = ({
  priceChangeHeaders,
  priceChangePercentagePrefix,
  market_data,
}) => {
  return (
    <div className="price-change">
      <div className="price-change-column-headers">
        {priceChangeHeaders.map((header, index) => (
          <span
            key={`priceChangeHeaders${index}`}
            className="price-change-cell"
          >
            {header}
          </span>
        ))}
      </div>
      <div className="price-change-percentage">
        {priceChangeHeaders.map((header, index) => (
          <span
            key={`market_data${index}`}
            className={`price-change-cell ${
              market_data[`${priceChangePercentagePrefix}${header}`] > 0
                ? "positive"
                : "negative"
            }`}
          >
            {market_data[`${priceChangePercentagePrefix}${header}`]}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PriceChangeTable;
