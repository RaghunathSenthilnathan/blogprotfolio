import React from "react";
import { ImHome, ImBubbles, ImMail4, ImExit } from "react-icons/im";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

const Navbar = () => {
  return (
    <>
      <SideNav
        style={{ marginLeft: "17px", background: "#3d423d" }}
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav
          defaultSelected="user"
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
        >
          <NavItem eventKey="user">
            <NavIcon>
              <ImMail4 style={{ margin: "12px", fontSize: "2rem" }} />
            </NavIcon>
            <NavText>User</NavText>
          </NavItem>
          <NavItem eventKey="home">
            <NavIcon>
              <ImHome style={{ margin: "12px", fontSize: "2rem" }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="blog">
            <NavIcon>
              <ImBubbles style={{ margin: "12px", fontSize: "2rem" }} />
            </NavIcon>
            <NavText>Blog</NavText>
          </NavItem>
          <NavItem eventKey="contact">
            <NavIcon>
              <ImExit style={{ margin: "12px", fontSize: "2rem" }} />
            </NavIcon>
            <NavText>Contact</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </>
  );
};

export default Navbar;
