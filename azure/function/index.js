function createHTML(title, content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <link rel="stylesheet" href="/build/_assets/global-I5E7NNPL.css" />
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
}

module.exports = async (context, req) => {
  let url = new URL(req.headers["x-ms-original-url"]);

  if (url.pathname === "/") {
    return {
      status: 200,
      headers: {
        "Content-Type": "text/html",
      },
      body: createHTML(
        "Azure Functions",
        `
          <div>
            <h1>Azure Functions</h1>
            <a href="/page-2">Go to page 2</a>
          </div>
        `
      ),
    };
  }

  if (url.pathname === "/page-2") {
    return {
      status: 200,
      headers: {
        "Content-Type": "text/html",
      },
      body: createHTML(
        "Page 2",
        `
          <div>
            <h1>Page 2</h1>
            <a href="/">Go to Home</a>
          </div>
        `
      ),
    };
  }

  return {
    status: 404,
    headers: {
      "Content-Type": "text/html",
    },
    body: createHTML("404", "Page Not Found!"),
  };
};
