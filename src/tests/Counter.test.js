import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  expect(screen.getByText("Counter")).toBeVisible();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId("count")).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  expect(screen.getByTestId("count")).toHaveTextContent("0");
  fireEvent.click(screen.getByText("+"));
  expect(screen.getByTestId("count")).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  expect(screen.getByTestId("count")).toHaveTextContent("0");
  fireEvent.click(screen.getByText("-"));
  expect(screen.getByTestId("count")).toHaveTextContent("-1");
});
