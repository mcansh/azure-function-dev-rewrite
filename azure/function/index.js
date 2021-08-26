module.exports = async (context, req) => {
  context.log("JavaScript HTTP trigger function processed a request.");
  context.log(req);
  return {
    status: 200,
    body: JSON.stringify(
      {
        expected: "http://localhost:4280/",
        received: req.headers["x-ms-original-url"],
      },
      null,
      2
    ),
  };
};
