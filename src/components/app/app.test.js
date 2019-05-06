import React from 'react';
import renderer from 'react-test-renderer';
import App from "../app/app";

it(`App рендерится корректно`, ()=> {
  const tree = renderer
    .create(
        <App
          gameTime={0}
          errorCount={0}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
