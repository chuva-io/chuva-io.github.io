import CodeBlock from "@/components/CodeBlock";

const code = {
  js: {
    connect: {
      filename: "less/sockets/demo/connect/index.js",
      code: `const { kvs } = require('@chuva.io/less');

exports.process = async ({ connection_id }) => {
  console.log('Client connected: ' + connection_id);
  
  // Save your socket connection_id
  await kvs.set('DEMO_SOCKET_CONNECTION_ID', connection_id);
};`,
    },
    channel: {
      filename: "less/sockets/demo/my_channel/index.js",
      code: `const { sockets } = require('@chuva.io/less');

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
  <div className="border border-chuva-green">
    <div>
      <p>
        Web Sockets in Less are powered by{" "}
        <strong>AWS API Gateway WebSocket APIs</strong> with{" "}
        <strong>Lambda functions</strong>. This provides real-time bidirectional
        communication with automatic scaling and built-in connection management.
        Simply add a sockets folder to your less directory and create handlers
        for connect, disconnect, and custom channels.
      </p>
      <ul className="my-4 space-y-2">
        <li>
          • <strong>AWS API Gateway WebSocket</strong>: Managed WebSocket
          connections with automatic scaling
        </li>
        <li>
          • <strong>Lambda-powered handlers</strong>: Connect, disconnect, and
          message handlers that scale automatically
        </li>
        <li>
          • <strong>Secure WSS</strong>: Encrypted WebSocket connections with
          SSL/TLS termination
        </li>
        <li>
          • <strong>Unlimited concurrent connections</strong>: Handle millions
          of simultaneous connections
        </li>
        <li>
          • <strong>32KB per message</strong>: Efficient real-time data transfer
        </li>
        <li>
          • <strong>Built-in connection management</strong>: Automatic
          connection tracking and cleanup
        </li>
        <li>
          • <strong>Global edge locations</strong>: Low-latency connections
          worldwide
        </li>
      </ul>
    </div>

    <div className="space-y-6">
      <div>
        <h4 className="mb-2 text-lg font-semibold">
          Socket Connection Handler
        </h4>
        <CodeBlock
          language="javascript"
          filename={code.js.connect.filename}
          code={code.js.connect.code}
        />
      </div>

      <div>
        <h4 className="mb-2 text-lg font-semibold">
          Socket Channel Message Handler
        </h4>
        <CodeBlock
          language="javascript"
          filename={code.js.channel.filename}
          code={code.js.channel.code}
        />
      </div>
    </div>
  </div>
);
