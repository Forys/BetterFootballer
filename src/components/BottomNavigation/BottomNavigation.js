import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomNavigation = () => {
  return (
    <NavigationWrapper>
      <NavigationItem active="true">
        <FontAwesomeIcon icon="home" />
      </NavigationItem>
      <NavigationItem>
        <FontAwesomeIcon icon="stopwatch" />
      </NavigationItem>
      <NavigationItem>
        <FontAwesomeIcon icon="futbol" />
      </NavigationItem>
      <NavigationItem>
        <FontAwesomeIcon icon="trophy" />
      </NavigationItem>
      <NavigationItem>
        <FontAwesomeIcon icon="bars" />
      </NavigationItem>
    </NavigationWrapper>
  );
};

export default BottomNavigation;

const NavigationWrapper = styled.div`
  background-color: ${props => props.theme.primary};
  color: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 100;
  width: 100%;
  bottom: 0;
  box-shadow: 0px -1px 4px -1px rgba(0, 0, 0, 0.2),
    0px -1px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const NavigationItem = styled.div`
  color: ${props => (props.active ? "#fff" : "rgba(0, 0, 0, 0.54)")};
  padding: 6px 12px 8px;
  max-width: 168px;
  font-size: 120%;
  flex-grow: 1;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    padding-top 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    color: #fff;
  }
`;
