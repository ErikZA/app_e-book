import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import crown from "../../../images/icons/crown.png";
import { ThemeContext } from "styled-components";

import {
  Container,
  Images,
  ContainerImg,
  ContainerTxt,
  ContainerLogin,
} from "./styles";

interface Props {
  toggleTheme(): void;
}

const NavBar: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <Container className="navbar">
      <Link className="mr-auto" to="/">
        <ContainerImg>
          <Images src={crown}></Images>
          My App
        </ContainerImg>
      </Link>

      <ContainerTxt>
        <Link to="/signUp">
          <ContainerLogin>Sigin Up</ContainerLogin>
        </Link>

        <Link to="/login">
          <ContainerLogin>login</ContainerLogin>
        </Link>
      </ContainerTxt>

      <Switch
        onChange={toggleTheme}
        checked={title === "Primary"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor="#A0C1B9"
        onColor="#331138"
      />
    </Container>
  );
};

export default NavBar;
