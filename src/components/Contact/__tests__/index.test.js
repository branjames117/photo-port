import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
  // baseline test
  it('renders', () => {
    render(<ContactForm />);
  });

  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches text in h1 and button', () => {
    const { getByTestId } = render(<ContactForm />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('buttontag')).toHaveTextContent('Submit');
  });
});
