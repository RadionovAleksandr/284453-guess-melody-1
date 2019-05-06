import React from 'react';
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";

const clickHandler = () => {
  // eslint-disable-next-line no-console
  console.log(`click`);
};

const App = (props) => {
  const {gameTime, errorCount} = props;
  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
    onClick={clickHandler}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  onclick: PropTypes.func
};

export default App;
