import styled from "styled-components";

export const Container = styled.nav`
  height: 60px;
  background: ${(props) => props.theme.colors.primary} !important;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
`;

export const Images = styled.img`
  width: 30px !important;
  margin: auto !important;
`;

export const ContainerImg = styled.div`
  display: grid;
  align-items: center;
  margin: 0 15px 0 15px;
  cursor: pointer;
  color: #000 !important;
`;

export const ContainerTxt = styled.div`
  display: flex;
`;

export const ContainerLogin = styled.div`
  display: grid;
  align-items: center;
  margin: 0 10px 0 10px;
  font-size: 18px;
  cursor: pointer;
  color: #000 !important;
`;
