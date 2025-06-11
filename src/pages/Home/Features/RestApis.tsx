import CodeBlock from "@/components/CodeBlock";

const code = {
  js: {
    restApi: {
      filename: "less/apis/webhooks/stripe/post.js",
      code: `exports.process = (request, response) => {
  console.log("Processing the Stripe webhook request:", request.body);
  response.statusCode = 204;
  return response;
};`,
    },
  },
};

export default (): React.ReactNode => (
  <div className="flex flex-col items-center gap-4 md:flex-row">
    <p className="md:w-2/5">
      REST APIs in Less are backed by <strong>AWS API Gateway</strong> and your
      routes are simple Lambda functions.
    </p>

    <div className="max-w-full overflow-x-auto md:w-3/5">
      <CodeBlock
        language="javascript"
        filename={code.js.restApi.filename}
        code={code.js.restApi.code}
        className="w-full"
      />
    </div>
  </div>
);
