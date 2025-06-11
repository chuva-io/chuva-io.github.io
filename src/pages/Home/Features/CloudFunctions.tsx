import CodeBlock from "@/components/CodeBlock";

const code = {
  js: {
    function: {
      filename: "less/functions/sum/index.js",
      code: `exports.process = ({ a, b }) => {
  return a + b;
};`,
    },
    caller: {
      filename: "less/apis/demo/calculate/get.js",
      code: `const { functions } = require('@chuva.io/less');

exports.process = async (request, response) => {
  // Get the values to add from the query parameters
  const { a, b } = request.query;

  // Call the cloud function
  const sum_result = await functions.sum({ a, b });
  
  response.body = \`The sum is: \${sum_result}\`;
  return response;
};`,
    },
  },
  py: {
    function: {
      filename: "less/functions/factorial/index.py",
      code: `def process(n):
    if n <= 1:
        return 1
    return n * process(n - 1)`,
    },
  },
};

export default (): React.ReactNode => (
  <div className="pb-20">
    <div>
      <p>
        Use Less Cloud Functions to bridge between programming languages, slowly
        migrate your existing stacks to the cloud, expose your existing helper
        functions via REST API and Less SDK, and more.
      </p>
      <ul className="my-4 space-y-2">
        <li>
          • <strong>Multi-language support</strong>: Bridge between JavaScript,
          Python, and more
        </li>
        <li>
          • <strong>API execution</strong>: Call functions via REST API from
          anywhere
        </li>
        <li>
          • <strong>Language interoperability</strong>: Share SDKs and libraries
          across languages
        </li>
      </ul>
    </div>

    <div className="space-y-6">
      <div>
        <h4 className="mb-2 text-lg font-semibold">
          Cloud function to add two numbers
        </h4>
        <CodeBlock
          language="javascript"
          filename={code.js.function.filename}
          code={code.js.function.code}
        />
      </div>

      <div>
        <h4 className="mb-2 text-lg font-semibold">
          Calling Cloud Functions from the SDK
        </h4>
        <CodeBlock
          language="javascript"
          filename={code.js.caller.filename}
          code={code.js.caller.code}
        />
      </div>
    </div>
  </div>
);
