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
          GitHub: https://github.com/ErikZA <br />
          LinkeDin: https://www.linkedin.com/in/erik-zambeli-539ab411a
        </strong>
      </TxtWhite>
    </>
  );
};

export default ColGrey;
