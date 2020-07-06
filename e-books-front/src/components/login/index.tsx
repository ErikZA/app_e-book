import React from "react";
import ImgTopLeft from "../../images/pictures/Element_Top.png";

import ColGrey from "./colGrey";
import { RoutesLogin } from "../../routes";

import { ImgTop, ContainerGrey } from "./styles";

const LoginPage: React.FC = () => {
  return (
    <ContainerGrey className="container-fluid">
      <div className="ImgBottom">
        <ImgTop src={ImgTopLeft} alt="Image left" />
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <RoutesLogin />
          </div>
          <div className="col-lg-6">
            <ColGrey />
          </div>
        </div>
      </div>
    </ContainerGrey>
  );
};

export default LoginPage;
