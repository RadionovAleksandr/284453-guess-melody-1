import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const init = () => {
  const settings = {
    gameTime: 5,
    errorCount: 3,
  };
  
  ReactDOM.render(
    <App
      gameTime={settings.gameTime}
      errorCOunt={settings.errorCount}
    />,
    document.querySelector(`.main`),
  );
};

init();
