import React from "react";
import styled from "styled-components";
import logo from "../img/logo2.png";

function Navigation() {
  return (
    <>
      <NavigationStyled>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <ul className="nav-items">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#faq">FAQs</a>
          </li>
          <li>
            <a href="#activity">Activity</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <div className="primary-btn">GET CONNECTED</div>
        </ul>
      </NavigationStyled>
    </>
  );
}

const NavigationStyled = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-items {
    display: flex;
    align-items: center;
    li {
      margin: 0 1.5rem;
    }
    .primary-btn {
      margin-left: 3rem;
      background-color: rgba(57, 95, 246, 0.6);
      padding: 0.6rem 0.8rem;
      border-radius: 70px;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      &:hover {
        background-color: rgba(57, 95, 246, 1);
      }
    }
  }

  .logo {
    img {
      width: 60px;
    }
  }
`;

export default Navigation;
