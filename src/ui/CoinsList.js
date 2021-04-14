import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "../actions/coinActions";
import { useParams, useHistory } from "react-router-dom";
import { Avatar, Button, PageHeader, Spin, Result } from "antd";

const CoinHeader = () => (
  <div className="coin-header">
    <span className="coin-column"></span>
    <span className="coin-column">Name</span>
    <span className="coin-column">Symbol</span>
    <span className="coin-column">Current Price</span>
    <span className="coin-column">High (24h)</span>
    <span className="coin-column">Low (24h)</span>
    <span className="coin-column">Change % (24h)</span>
  </div>
);

const CoinRow = ({ coin, onSelect }) => (
  <div className="coin-row" onClick={(e) => onSelect(coin.id)}>
    <span className="coin-column">
      <Avatar src={coin.image} size={30} />
    </span>
    <span className="coin-column">{coin.name}</span>
    <span className="coin-column">{coin.symbol}</span>
    <span className="coin-column">{coin.current_price}</span>
    <span className="coin-column">{coin.high_24h}</span>
    <span className="coin-column">{coin.low_24h}</span>
    <span
      className={`coin-column ${
        coin.price_change_percentage_24h > 0
          ? "positive"
          : coin.price_change_percentage_24h < 0
          ? "negative"
          : ""
      }`}
    >
      {coin.price_change_percentage_24h}
    </span>
  </div>
);

const Pagination = ({ page = 1, onSelect }) => {
  const maxButtons = 5;
  return (
    <>
      <Button.Group>
        <Button
          onClick={(e) => onSelect(parseInt(page) - 1)}
          type="primary"
          disabled={page > 1 ? false : true}
        >
          Previous Page
        </Button>
        {page > maxButtons && (
          <Button onClick={(e) => onSelect(1)} type="secondary">
            1
          </Button>
        )}

        {page > maxButtons + 1 && <Button>...</Button>}

        {Array.from(
          { length: Math.min(maxButtons, page) },
          (_, index) => page - index
        )
          .reverse()
          .map((p, i) => (
            <Button
              key={`p${i}`}
              onClick={(e) => onSelect(p)}
              disabled={p === page}
              type="secondary"
            >
              {p}
            </Button>
          ))}
        <Button onClick={(e) => onSelect(parseInt(page) + 1)} type="primary">
          Next Page
        </Button>
      </Button.Group>
    </>
  );
};

const CoinsList = () => {

  const { data, error, loading } = useSelector((state) => state.coins);

  let { page } = useParams();
  page = parseInt(page) || 1;
  
  const history = useHistory();

  const getPage = (page) => {
    history.push(`/coins/${page}`);
  };

  const getCoinInfo = (id) => {
    history.push(`/coin/${id}`);
  };

  const refresh = () => {
    dispatch(fetchCoins({ page: page || 1 }));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins({ page: page || 1 }));
  }, [page, dispatch]);

  if (error) {
    return (
      <Result
        status="warning"
        title="Could not retrieve data"
        extra={
          <Button type="primary" onClick={refresh} key="console">
            Please retry
          </Button>
        }
      />
    );
  }
 
  return (
    <>
      <Spin spinning={loading}>
        <PageHeader title="Coins" />
        <div className="coins-list">
          <Pagination page={page} onSelect={getPage} />
          {data?.length && <CoinHeader />}
          {data?.map((coin) => (
            <>
              <CoinRow key={coin.id} coin={coin} onSelect={getCoinInfo} />
            </>
          ))}
        </div>
      </Spin>
    </>
  );
};

export default CoinsList;
