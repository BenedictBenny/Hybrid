import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import DialogContent from '../../DialogContent';

describe("SearchResults Component testing..", () => {
  test("Title, points, Author, comment should be displayed ..", () => {
    render(
        <Provider store={store}>
      <DialogContent itemDetails={{loading: false, success: true, details: {
          title: "A Sample book", points: 235, children: [{author:"An Author", text:"sample text"}]
      } }}/>
      </Provider>
    );
    const item1 = screen.getByText(/A Sample Book/i);
    const item2 = screen.getByText(/235/i);
    const item3 = screen.getByText(/An Author/i);
    const item4 = screen.getByText(/sample text/i);

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(item3).toBeInTheDocument();
    expect(item4).toBeInTheDocument();
  });

  test("Loading skeleton must appear while loading..", () => {
    render(
        <Provider store={store}>
      <DialogContent itemDetails={{loading: true, success: false, details: []}}/>
      </Provider>
    );
    const item1 = screen.getByTestId('skeleton-element');
    expect(item1).toBeInTheDocument();
  });

  test("Error should be displayed in case of api fail..", () => {
    render(
        <Provider store={store}>
      <DialogContent itemDetails={{loading: false, success: false, details: []}}/>
      </Provider>
    );
    const item1 = screen.getByText(/Error/i);
    expect(item1).toBeInTheDocument();
  });
});