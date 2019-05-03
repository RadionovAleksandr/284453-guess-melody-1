import React from 'react';
import WelcomeScreen from "../welcome-screen/welcome-screen";

const App = (props) => {
  const {gameTime, errorCount} = props;
  return <WelcomeScreen
    time={gameTime}
    errorCOunt={errorCount}
  />;
};

export default App;
