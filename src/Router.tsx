import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Price from "./routes/Price";
import Chart from "./routes/Chart";
//Switch -> Routes로 변경됨

interface IRouterProps {
  toggleDark: () => void; // 받아오는 toggleDark 함수가 파라미터를 가지고 있지 않고, return시켜주는게 없다.
  isDark: boolean;
}

function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins toggleDark={toggleDark} />}></Route>
        <Route path="/:coinId/*" element={<Coin />}>
          {/* Router에게 URL의 :coinId 부분 값에 관심이 있다고 말해주는 방법 */}
          <Route path={`price`} element={<Price />} />
          <Route path={`chart`} element={<Chart isDark={isDark} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
