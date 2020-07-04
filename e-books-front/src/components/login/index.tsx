import React from "react";
import ImgTopLeft from "../../images/pictures/Element_Top.png";

import ColGrey from "./colGrey";
import { RoutesLogin } from "../../routes";

import { ImgTop, ContainerGrey } from "./styles";

const LoginPage: React.FC = () => {
  return (
    <div className="container-fluid">
      <ContainerGrey className="ImgBottom">
        <ImgTop src={ImgTopLeft} alt="Image left" />
        <div className="row">
          <div className="col-6">
            <RoutesLogin />
          </div>
          <div className="col-6">
            <ColGrey />
          </div>
        </div>
      </ContainerGrey>
    </div>
  );
};

export default LoginPage;
