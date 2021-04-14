import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const Wrapper = ({ children }) => {
  return (
    <Provider store={store()}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";

export { customRender as render };
