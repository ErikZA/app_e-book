import React from "react";
import idea from "../../../images/pictures/idea_1.png";

import { TxtWhite, ImgStrong } from "./styles";

const ColGrey: React.FC = () => {
  return (
    <>
      <TxtWhite>
        <ImgStrong src={idea} alt="idea"></ImgStrong>
        <br />
        <strong>
          Version 0.0.1 - Beta - Nova Fatima - Paraná - Brazil <br />
          Erik Henrique de Oliveira Zambeli <br />
          GitHub:{" "}
          <a href="https://github.com/ErikZA">https://github.com/ErikZA</a>{" "}
          <br />
          Linkedin:{" "}
          <a href="https://www.linkedin.com/in/erik-zambeli-539ab411a">
            https://www.linkedin.com/in/erik-zambeli-539ab411a
          </a>
        </strong>
      </TxtWhite>
    </>
  );
};

export default ColGrey;
