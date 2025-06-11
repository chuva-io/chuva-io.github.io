import CodeBlock from "@/components/CodeBlock";

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
  
  // React to real-time changes
  // Send notifications, update caches, etc.
};`,
    },
  },
  py: {
    basic: {
      filename: "less/functions/cache_manager/index.py",
      code: `from less import kvs

def process(data):
    # Set value with TTL (2 hours)
    ttl = 2 * 60 * 60
    kvs.set('cached_data', data, ttl)
    
    return {'status': 'cached'}`,
    },
  },
};

export default (): React.ReactNode => (
  <div className="pb-20">
    <div>
      <p>
        The Key-Value Store in Less is powered by{" "}
        <strong>Amazon DynamoDB</strong>, a fully managed NoSQL database that
        delivers single-digit millisecond performance at any scale. Less also
        lets you stream real-time changes via DynamoDB Streams.
      </p>
      <ul className="my-4 space-y-2">
        <li>
          • <strong>Amazon DynamoDB</strong>: Fully managed NoSQL database with
          guaranteed performance
        </li>
        <li>
          • <strong>DynamoDB Streams</strong>: Real-time change data capture for
          reactive architectures
        </li>
        <li>
          • <strong>Single-digit millisecond</strong>: Consistent low-latency
          responses at any scale
        </li>
        <li>
          • <strong>Unlimited throughput</strong>: Auto-scaling to handle
          millions of requests per second
        </li>
        <li>
          • <strong>99.999% availability</strong>: Enterprise-grade uptime SLA
        </li>
        <li>
          • <strong>Encryption at rest</strong>: Server-side encryption
        </li>
        <li>
          • <strong>400KB items</strong>: Support for rich data structures
        </li>
        <li>
          • <strong>TTL support</strong>: Automatic item expiration and cleanup
        </li>
      </ul>
    </div>

    <div className="space-y-6">
      <div>
        <h4 className="mb-2 text-lg font-semibold">Get data from cache</h4>
        <CodeBlock
          language="javascript"
          filename={code.js.basic.filename}
          code={code.js.basic.code}
        />
      </div>

      <div>
        <h4 className="mb-2 text-lg font-semibold">Real-time Streaming</h4>
        <CodeBlock
          language="javascript"
          filename={code.js.streaming.filename}
          code={code.js.streaming.code}
        />
      </div>
    </div>
  </div>
);
