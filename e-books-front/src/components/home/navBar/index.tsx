import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import cake from "../../../images/icons/cake.png";
import crown from "../../../images/icons/crown.png";
import invitation from "../../../images/icons/invitation.png";
import guests from "../../../images/icons/guests.png";
import birthday from "../../../images/icons/birthday-and-party.png";

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
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Link to="/">
        <ContainerImg>
          <Images src={crown}></Images>
          My Events
        </ContainerImg>
      </Link>

      <ContainerTxt>
        <Link to="/party">
          <ContainerImg>
            <Images src={cake}></Images>
            Parties
          </ContainerImg>
        </Link>

        <Link to="/wedding">
          <ContainerImg>
            <Images src={guests}></Images>
            Weddings
          </ContainerImg>
        </Link>

        <Link to="/kids">
          <ContainerImg>
            <Images src={birthday}></Images>
            Kids
          </ContainerImg>
        </Link>

        <Link to="/invitation">
          <ContainerImg>
            <Images src={invitation}></Images>
            Invitations
          </ContainerImg>
        </Link>
      </ContainerTxt>

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
