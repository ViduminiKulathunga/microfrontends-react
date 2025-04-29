import React from "react";
import ReactDom from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (el, { onNaviagte, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNaviagte) {
    history.listen(onNaviagte);
  }

  ReactDom.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
