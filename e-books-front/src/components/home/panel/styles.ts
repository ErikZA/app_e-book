import styled from "styled-components";
import Oval1 from "../../../images/pictures/Oval2@3x.png";
import Oval2 from "../../../images/pictures/Oval@3x.png";

export const Container = styled.div`
  background-size: 50%, 30% !important;
  background: url(${Oval1}) no-repeat 48% 152%, url(${Oval2}) -5% 156% no-repeat;
  display: flex;
`;

export const ImageContainer = styled.img`
  width: 60%;
`;

export const ContainerBackImage = styled.div``;
