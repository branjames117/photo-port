import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';

const portrait = {
  name: 'portraits',
  description: 'Portraits of people in my life',
};

afterEach(cleanup);

describe('Gallery is rendering', () => {
  it('renders', () => {
    render(<Gallery currentCategory={portrait} />);
  });

  it('inserts text into the h1', () => {
    const { getByTestId } = render(<Gallery currentCategory={portrait} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('h1tag')).toHaveTextContent('Portraits');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
