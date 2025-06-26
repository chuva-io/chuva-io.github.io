import CodeBlock from "@/components/CodeBlock";
import GlowingButton from "@/components/GlowingButton";

const code = {
  js: {
    restApi: {
      filename: "less/apis/webhooks/stripe/post.js",
      code: `// Process an API request
exports.process = (request, response) => {
  console.log("Processing the Stripe webhook request:", request.body);
  response.statusCode = 204;
  return response;
};`,
    },
  },
};

export default (): React.ReactNode => (
  <div className="flex flex-col items-center gap-8">
    <p className="md:w-2/5">
      REST APIs in Less are backed by <strong>AWS API Gateway</strong> and your
      routes are simple Lambda functions.
    </p>

    <div className="max-w-full overflow-x-auto md:w-3/5">
      <CodeBlock
        language="javascript"
        filename={code.js.restApi.filename}
        code={code.js.restApi.code}
      />
    </div>

    <div>
      <GlowingButton
        title={"Visit the REST API Documentation"}
        href={"https://less.chuva.io/rest-apis"}
        newTab
      />
    </div>
  </div>
);
