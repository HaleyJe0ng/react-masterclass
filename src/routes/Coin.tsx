import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocation, Navigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 25px;
  font-weight: bold;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

type Params = {
  coinId: string;
};

interface LocationState {
  state: {
    name: string;
    rank: number;
  };
}

/*
예제처럼  
    interface LocationState{
        name: string;
    } 
    const { state } = useLocation<LocationState>(); 
따라치면   //state가 unknown이다! 에러난다!! 
*/

function Coin() {
  const [loading, setLoading] = useState<boolean>(true);
  const { coinId } = useParams<Params>();
  const { state } = useLocation() as LocationState;

  const redirectHome = () => {
    //만약 state가 존재하지 않으면 다시 root로 이동시켜라
    return <Navigate to="/" replace />;
  };

  return (
    <Container>
      <Header>
        <Title>{state?.name.toUpperCase() || redirectHome()}</Title>
        {/* 만약 state가 존재하면 state.name을 가져오고 state가 존재하지 않으면 Loading을 출력해라 */}
      </Header>
      {loading ? <Loader>"Loading..."</Loader> : null}
    </Container>
  );
}

export default Coin;
