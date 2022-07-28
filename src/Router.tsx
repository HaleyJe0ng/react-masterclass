import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
//Switch -> Routes로 변경됨

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />}></Route>
        <Route path="/:coinId/*" element={<Coin />}></Route>
        {/* Router에게 URL의 :coinId 부분 값에 관심이 있다고 말해주는 방법 */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
