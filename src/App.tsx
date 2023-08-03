import React from "react";
//import logo from './logo.svg';
import logo from "./images/network-team-icon.png";
import "./App.css";
import "./style.css";

function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <div id="my-picture">
          <img src={logo} alt="poza" width="100" />
        </div>
        <div id="header-info">
          <h1>Teams Networking</h1>
          <h2>CRUD operations example (Create, Read, Update, Delete)</h2>
        </div>
      </div>
    </header>
  );
}

function ContentWrapper() {
  return <div id="main">TODO table...</div>;
}

function AppFooter() {
  return (
    <footer>
      <a className="item" href="https://github.com/rroxana13/teams-networking" target="_blank">
        <span>👩‍💻</span> <span>Source code</span>
      </a>
      <span className="item">|</span>
      <a className="item" href="https://github.com/rroxana13/node-api" target="_blank">
        <span>📃</span> <span>API docs</span>
      </a>
    </footer>
  );
}

function App() {
  return (
    <>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </>
  );
}

export default App;
