import { screen } from "@testing-library/react";
import { render } from "./testRenderer";
import App from "./App";


test("renders the coins list on startup", () => {
  render(<App />);
  const linkElement = screen.getByText(/Coins/i);
  expect(linkElement).toBeInTheDocument();
});

