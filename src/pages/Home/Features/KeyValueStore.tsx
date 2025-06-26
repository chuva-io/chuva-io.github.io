import CodeBlock from "@/components/CodeBlock";
import GlowingButton from "@/components/GlowingButton";

const code = {
  js: {
    basic: {
      filename: "less/apis/orders/get.js",
      code: `const { kvs } = require('@chuva.io/less');

exports.process = async (request, response) => {
  // Check for cached value
  const cachedOrders = await kvs.get('orders');
  response.body = cachedOrders;
  return response;
};`,
    },
    streaming: {
      filename: "less/topics/kvs_updated/log/index.js",
      code: `exports.process = async ({ key, old_value, new_value }) => {
  console.log(\`Item with key: '\${key}' updated.\`);
  console.log(\`Old value: \${old_value}.\`);
  console.log(\`New value: \${new_value}.\`);
};`,
    },
  },
};

export default (): React.ReactNode => (
  <div className="flex flex-col items-center gap-8">
    <div>
      <p className="max-w-xl pb-4">
        The Key-Value Store in Less is powered by{" "}
        <strong>Amazon DynamoDB</strong>, a fully managed NoSQL database that
        delivers single-digit millisecond performance at any scale.
      </p>
      <p className="max-w-xl">
        Less also lets you stream real-time KVS changes using Pub/Sub.
      </p>
    </div>

    <div className="w-full max-w-2xl overflow-x-auto md:w-4/5">
      <h4 className="mb-2 text-lg font-semibold">Get data from KVS</h4>
      <CodeBlock
        language="javascript"
        filename={code.js.basic.filename}
        code={code.js.basic.code}
      />
    </div>

    <div className="w-full max-w-2xl overflow-x-auto md:w-4/5">
      <h4 className="mb-2 text-lg font-semibold">Real-time Streaming</h4>
      <CodeBlock
        language="javascript"
        filename={code.js.streaming.filename}
        code={code.js.streaming.code}
      />
    </div>

    <div className="mx-auto w-md">
      <GlowingButton
        title={"Visit the Key-Value Store Documentation"}
        href={"https://docs.less.chuva.io/key-value-store"}
        newTab
      />
    </div>
  </div>
);
