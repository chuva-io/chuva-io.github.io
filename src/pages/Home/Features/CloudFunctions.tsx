import CodeBlock from "@/components/CodeBlock";
import GlowingButton from "@/components/GlowingButton";

const code = {
  js: {
    function: {
      filename: "less/functions/sum/index.js",
      code: `// Cloud function to add 2 numbers
exports.process = ({ a, b }) => {
  return a + b;
};`,
    },
    caller: {
      filename: "less/apis/demo/calculate/get.js",
      code: `// Import functions to call cloud functions
const { functions } = require('@chuva.io/less');

// Add 2 numbers via GET request
exports.process = async (request, response) => {
  // Get the 2 values to add from the query parameters
  const { a, b } = request.query;

  // Call the cloud function
  const sum_result = await functions.sum({ a, b });
  
  response.body = \`The sum is: \${sum_result}\`;
  return response;
};`,
    },
  },
};

export default (): React.ReactNode => (
  <div className="flex flex-col items-center gap-8">
    <p className="max-w-xl">
      Use Less Cloud Functions to run workers, bridge between programming
      languages, incrementally migrate existing code to the cloud, expose helper
      functions via REST API or the Less SDK, and more. What use-cases can you
      come up with?
    </p>

    <div className="w-full max-w-2xl overflow-x-auto md:w-4/5">
      <h4 className="mb-2 text-lg font-semibold">Create your Cloud Function</h4>
      <CodeBlock
        language="javascript"
        filename={code.js.function.filename}
        code={code.js.function.code}
      />
    </div>

    <div className="w-full max-w-2xl overflow-x-auto md:w-4/5">
      <h4 className="mb-2 text-lg font-semibold">
        Calling your Cloud Function Using the SDK
      </h4>
      <CodeBlock
        language="javascript"
        filename={code.js.caller.filename}
        code={code.js.caller.code}
      />
    </div>

    <div>
      <GlowingButton
        title={"Visit the Cloud Function Documentation"}
        href={"https://docs.less.chuva.io/cloud-functions"}
        newTab
      />
    </div>
  </div>
);
