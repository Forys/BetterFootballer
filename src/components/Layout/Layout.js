import React from "react";
import Aux from "../../hoc/Aux";
import logo from "../../assets/logo.svg";

const layout = props => (
  <Aux>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    <div>Header, BottomNav, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
