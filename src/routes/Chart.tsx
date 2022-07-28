import { Params, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCoinHistory } from "../api";
import { StyledComponent } from "styled-components";
import ApexChart from "react-apexcharts"; //자동완성으로 들어가는거 조심..! from "apexcharts" 아님!
import { ifError } from "assert";

interface IHistorical {
  close: string;
  high: string;
  low: string;
  market_cap: number;
  open: string;
  time_close: number;
  time_open: number;
  volume: string;
}

function Chart() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IHistorical[]>(); //배열로 선언
  const { coinId } = useParams<Params>();

  useEffect(() => {
    (async () => {
      const response = await fetchCoinHistory(coinId ?? "");
      console.log("response : ", response);
      setData(response);

      console.log(data);

      //임시로 데이터 없으면 loading 쭉 출력되도록 설정
      response ? setLoading(false) : setLoading(true);
    })();
    //본 함수가 완전히 끝나기 전에는 setState를 해도 useState가 이전 "Oldstate" 값을 가지고 있는다. -> 그래서 console.log를 찍어도 바로 값이 출력되지 않은 것!
  }, []);

  return (
    <div>
      {loading ? (
        "Loading Chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "price",
              data: data?.map((price) => Number(price.close)) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: { curve: "smooth", width: 4 },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisTicks: { show: false },
              axisBorder: { show: false },
              labels: { show: false },
              type: "datetime",
              categories:
                data?.map((price) =>
                  new Date(price.time_close * 1000).toLocaleDateString()
                ) ?? [],
              //자바스크립트 시간과 유닉스 시간의 단위가 다름! price.time_close * 1000 해줘야 함
            },
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(3)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
