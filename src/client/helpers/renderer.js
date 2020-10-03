import React from "react";
import { renderToString } from "react-dom/server";
import Routes from "../routes";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";

const Renderer = (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  return `
    <html>
      <head>
        <body>
          <div id="root">${content}</div>
          <script src="bundle.js"></script>
        </body>
      </head>
    </html>
  `;
};

export default Renderer;
