import CodeBlock from "@/components/CodeBlock";
import GlowingButton from "@/components/GlowingButton";

const code = {
  js: {
    connect: {
      filename: "less/sockets/demo/connect/index.js",
      code: `// Use the Less Key-Value Store to manage client connections
const { kvs } = require('@chuva.io/less');

// Process client connections
exports.process = async ({ connection_id }) => {
  console.log('Client connected: ' + connection_id);
  
  // Save the connection_id to KVS
  await kvs.set('SOCKET_CONNECTION_ID', connection_id);
};`,
    },
    channel: {
      filename: "less/sockets/demo/my_channel/index.js",
      code: `// Import sockets to send messages to clients
const { sockets } = require('@chuva.io/less');

// Handle a message received from a client
exports.process = async ({ data, connection_id }) => {
  console.log(\`Received message from: \${connection_id}\`);
  console.log(\`Message: \${data}\`);

  // Send a message back to the client
  const message = \`You said: "\${JSON.stringify(data)}"\`;
  await sockets.demo.publish(message, [connection_id]);
};`,
    },
  },
  py: {
    connect: {
      filename: "less/sockets/demo/connect/index.py",
      code: `from less import kvs

def process(connection_id):
    print(f'Client connected: {connection_id}')
    
    # Save your socket connection_id
    kvs.set('DEMO_SOCKET_CONNECTION_ID', connection_id)`,
    },
  },
};

export default (): React.ReactNode => (
  <div className="flex flex-col items-center gap-8">
    <p className="max-w-xl">
      Real-time bidirectional communication with automatic scaling backed by{" "}
      <strong>AWS API Gateway</strong>.
    </p>

    <div className="w-full max-w-2xl overflow-x-auto md:w-4/5">
      <h4 className="mb-2 text-lg font-semibold">Socket Connection Handler</h4>
      <CodeBlock
        language="javascript"
        filename={code.js.connect.filename}
        code={code.js.connect.code}
      />
    </div>

    <div className="w-full max-w-2xl overflow-x-auto md:w-4/5">
      <h4 className="mb-2 text-lg font-semibold">
        Socket Channel Message Handler
      </h4>
      <CodeBlock
        language="javascript"
        filename={code.js.channel.filename}
        code={code.js.channel.code}
      />
    </div>

    <div>
      <GlowingButton
        title={"Visit the WebSocket Documentation"}
        href={"https://docs.less.chuva.io/web-sockets"}
        newTab
      />
    </div>
  </div>
);
