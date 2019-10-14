import React from "react";
import styled from "styled-components";

const TopNavigation = props => {
  return <TopNavigationWrapper>{props.title}</TopNavigationWrapper>;
};

export default TopNavigation;

const TopNavigationWrapper = styled.div`
  background-color: ${props => props.theme.primary};
  color: #fff;
  height: 50px;
  width: 100%;
  position: fixed;
  z-index: 101;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 110%;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
