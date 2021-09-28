import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  width: 1600px;
  height: 80px;
  box-sizing: border-box;
  background: linear-gradient(264.47deg, #2e43f0 29.39%, #6677ff 93.49%);
`;

export const Logo = styled.img`
  width: 164px;
  height: 43.37px;
  margin-left: 230px;
`;

export const Pages = styled.div`
  display: flex;
  li {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    color: #ffffff;
    opacity: 0.7;
    cursor: pointer;
    list-style-type: none;
    padding-right: 30px;
    :hover {
      opacity: 1;
    }
  }
`;

export const Button = styled.button`
  width: 172px;
  height: 62px;
  background: #ff5a05;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 230px;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 160%;
  color: #ffffff;
  cursor: pointer;
`;
