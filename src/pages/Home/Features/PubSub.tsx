import CodeBlock from "@/components/CodeBlock";
import GlowingButton from "@/components/GlowingButton";

const code = {
  js: {
    subscriber: {
      filename: "less/topics/user_created/send_welcome_email/index.js",
      code: `exports.process = async (user) => {
  console.log(\`Sending a welcome email to \${user.email}\`);
};`,
    },
    publisher: {
      filename: "less/apis/demo/users/post.js",
      code: `const { topics } = require('@chuva.io/less');

// Process an HTTP POST request
exports.process = async (request, response) => {
  // Get the user payload from the body
  const user = JSON.parse(request.body);
  
  // Create a new user
  const new_user = { id: 'abc-123', ...user };

  // Publish the new user to the user_created topic
  await topics.user_created.publish(new_user);

  // Return the response
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
  <div className="flex flex-col items-center gap-8">
    <p className="max-w-xl">
      Less gives you access to the fanout architecture using{" "}
      <strong>AWS SNS Topics → SQS Queues → Lambda functions</strong>. This
      provides at-least-once delivery guarantees with automatic retries.
      Messages that fail to be processed are retained and retried, while new
      messages continue processing independently.
    </p>

    <div className="w-full max-w-2xl overflow-x-auto md:w-4/5">
      <h4 className="mb-2 text-lg font-semibold">
        Publish a message to a topic
      </h4>
      <CodeBlock
        language="javascript"
        filename={code.js.publisher.filename}
        code={code.js.publisher.code}
      />
    </div>

    <div className="w-full max-w-2xl overflow-x-auto md:w-4/5">
      <h4 className="mb-2 text-lg font-semibold">Subscribe to a topic</h4>
      <CodeBlock
        language="javascript"
        filename={code.js.subscriber.filename}
        code={code.js.subscriber.code}
      />
    </div>
    <div>
      <GlowingButton
        title={"Visit the Pub/Sub Documentation"}
        href={"https://docs.less.chuva.io/topics_subscribers"}
        newTab
      />
    </div>
  </div>
);
