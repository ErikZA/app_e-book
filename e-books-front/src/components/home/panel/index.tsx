import React from "react";
import { Link } from "react-router-dom";

import { Container, ImageContainer, ContainerBackImage } from "./styles";

import Fox from "../../../images/pictures/Foxlearn@3x.png";

const panel: React.FC = () => {
  return (
    <Container>
      <div className="mb-5 row">
        <ContainerBackImage className="col-lg-6">
          <ImageContainer className="mt-3 ml-5" src={Fox} />
        </ContainerBackImage>

        <div className="col-lg-6 col-sm-12 text-left">
          <h1 className="mb-3 mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h1>
          <h5 className="mb-5 mt-5">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.{" "}
          </h5>
          <div className="row mb-2 mt-3">
            <Link
              to="/about"
              className="btn btn-color-essential btn-lg active m-auto"
              role="button"
              aria-pressed="true"
            >
              Get start
            </Link>
          </div>
          <div className="mt-3 row  text-center">
            <Link className="col" to="/signUp">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default panel;
