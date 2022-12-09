import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import SearchResults from '../../SearchResults';

describe("SearchResults Component testing..", () => {
  test("Title, Author, Link should be displayed ..", () => {
    render(
        <Provider store={store}>
      <SearchResults author="ravi" title="A sample Book" url="www.sample.com" />
      </Provider>
    );
    const item1 = screen.getByText(/A sample Book/i);
    const item2 = screen.getByText(/Ravi/i);
    const item3 = screen.getByText(/sample.com/i);

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(item3).toBeInTheDocument();
  });
});