import CodeBlock from "@/components/CodeBlock";

const code = {
  js: {
    subscriber: {
      filename: "less/topics/user_created/send_welcome_email/index.js",
      code: `exports.process = async (user) => {
  console.log(\`Sending a welcome email to \${user.email}\`);
  // Your email sending logic here
};`,
    },
    publisher: {
      filename: "less/apis/demo/users/post.js",
      code: `const { topics } = require('@chuva.io/less');

exports.process = async (request, response) => {
  // Get the user payload from the body
  const user = JSON.parse(request.body);
  
  // Create a new user
  const new_user = { id: 'abc-123', ...user };

  // Publish the new user to the user_created topic
  await topics.user_created.publish(new_user);

  response.body = JSON.stringify(new_user);
  return response;
};`,
    },
  },
  py: {
    subscriber: {
      filename: "less/topics/user_created/send_to_analytics/index.py",
      code: `def process(user):
    print(f'Sending user "{user["name"]}" to analytics')
    # Your analytics logic here`,
    },
  },
};

export default (): React.ReactNode => (
  <div className="pb-20">
    <div>
      <p>
        Less gives you access to the fanout architecture using{" "}
        <strong>AWS SNS Topics → SQS Queues → Lambda functions</strong>. This
        provides at-least-once delivery guarantees with automatic retries.
        Messages that fail to be processed are retained and retried, while new
        messages continue processing independently.
      </p>
      <ul className="my-4 space-y-2">
        <li>
          • <strong>AWS SNS Topics</strong>: Highly available message fanout to
          multiple subscribers
        </li>
        <li>
          • <strong>AWS SQS Queues</strong>: Durable message queuing with
          automatic retry logic
        </li>
        <li>
          • <strong>Lambda processors</strong>: Event-driven processing that
          scales automatically
        </li>
        <li>
          • <strong>At-least-once delivery</strong>: Guaranteed message delivery
          with built-in reliability
        </li>
        <li>
          • <strong>4-day retention</strong>: Failed messages retained for
          extended retry periods
        </li>
        <li>
          • <strong>Automatic retries</strong>: Failed messages are retained and
          retried automatically
        </li>
        <li>
          • <strong>Cross-application topics</strong>: Send messages across
          deployements to create event-driven microservices
        </li>
        <li>
          • <strong>~10ms latency</strong>: Ultra-fast message propagation
        </li>
        <li>
          • <strong>Unlimited throughput</strong>: Scale to millions of messages
          per second
        </li>
        <li>
          • <strong>256KB messages</strong>: Support for rich event payloads
        </li>
        <li>
          • <strong>Encryption</strong>: End-to-end encryption at rest and in
          transit
        </li>
      </ul>
    </div>

    <div className="space-y-6">
      <div>
        <h4 className="mb-2 text-lg font-semibold">
          Publish a message to a topic
        </h4>
        <CodeBlock
          language="javascript"
          filename={code.js.publisher.filename}
          code={code.js.publisher.code}
        />
      </div>

      <div>
        <h4 className="mb-2 text-lg font-semibold">Subscribe to a topic</h4>
        <CodeBlock
          language="javascript"
          filename={code.js.subscriber.filename}
          code={code.js.subscriber.code}
        />
      </div>
    </div>
  </div>
);
