import React from 'react';
import Enzyme, {shallow} from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import WelcomeScreen from './welcome-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Клик по кнопке работает корректно`, () => {
  const clickHandler = jest.fn();
  const app = shallow(
      <WelcomeScreen
        time={0}
        errorCount={0}
        onClick={clickHandler}
      />);

  const startButton = app.find(`.welcome__button`);
  startButton.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
