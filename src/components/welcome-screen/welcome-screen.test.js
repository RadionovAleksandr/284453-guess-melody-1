import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

it(`WelcomeScreen рендерится корректно`, ()=> {
  const tree = renderer
    .create(
        <WelcomeScreen
          time={0}
          errorCount={0}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
