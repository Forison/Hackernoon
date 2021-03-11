import React from 'react';
import renderer from 'react-test-renderer';


it('renders content with H1 tag with text call related', () => {
  const tree = renderer
    .create(<h1>Facebook</h1>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

