import { Params, useParams } from "react-router-dom";

function Price() {
  const { coinId } = useParams<Params>();

  return <h1>Price</h1>;
}

export default Price;
