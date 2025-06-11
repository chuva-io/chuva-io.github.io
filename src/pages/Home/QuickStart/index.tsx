import CodeBlock from "@/components/CodeBlock";

import { Button } from "@/components/ui/button";
import GlowingGridItem from "@/components/GlowingGridItem";

const code = {
  js: {
    create_route_bash: {
      code: `npx @chuva.io/less-cli create route \\\n --name demo \\\n --verb get \\\n --path "hello" \\\n --language js`,
    },
    create_route_result: {
      filename: "less/apis/store/orders/get.js",
      code: `exports.process = async (request, response) => {
  response.body = JSON.stringify([
    { id: "1", total: "9.99" }
  ]);
  return response;
};`,
    },
    build_and_run_code_bash: {
      code: `npx @chuva.io/less-cli build my-less-app && npx @chuva.io/less-cli run my-less-app`,
    },
    deploy_bash: {
      code: `# Build and run your Less app locally
npx @chuva.io/less-cli build my-less-app && npx @chuva.io/less-cli run my-less-app

# Deploy your Less app to AWS
npx @chuva.io/less-cli deploy my-less-app`,
    },
  },
  py: {
    create_route_bash: {
      code: `npx @chuva.io/less-cli create route --name demo --verb get --path "hello" --language py`,
    },
    create_route_result: {
      filename: "less/apis/demo/hello/get.py",
      code: `def process(request, response):
  response['body'] = 'Hello, world.'
  return response`,
    },
    deploy_bash: {
      code: `npx @chuva.io/less-cli deploy my-less-app`,
    },
  },
};

export default () => (
  <div className="flex flex-col max-w-full gap-8 text-left">
    <div className="flex flex-col max-w-full gap-2 text-left">
      <p className="">
        With Less you're just writing isolated cloud functions. Creating your
        cloud resources is as easy as creating files with your functions.
      </p>

      <div>
        <p>
          Let's say you want to create a REST API with a{" "}
          <strong>GET /hello</strong> route. All you need to do is:
        </p>

        <ol className="flex flex-col gap-8">
          <li>
            <span>
              1. Create the Demo REST API and the <strong>/hello</strong> path
              by creating the following folder in your project directory:
            </span>
            <CodeBlock language="bash" code="mkdir -p less/apis/demo/hello" />
          </li>
          <li className="flex flex-col gap-2">
            <span>
              2. Create the handler function for the <strong>GET /hello</strong>{" "}
              route:
            </span>
            <CodeBlock
              language="bash"
              code="touch less/apis/demo/hello/get.js"
            />
            <CodeBlock
              language="javascript"
              filename={code.js.create_route_result.filename}
              code={code.js.create_route_result.code}
            />
          </li>
        </ol>
      </div>

      <div>
        <p>
          The Less CLI makes this even easier. Run this command to create your
          resources and boilerplate code in one step:
        </p>
        <CodeBlock language="bash" code={code.js.create_route_bash.code} />
      </div>
    </div>

    <div className="flex flex-col max-w-full gap-2">
      <p>
        That's all you need! You can run this project locally or deploy it to
        AWS:
      </p>

      <CodeBlock language="bash" code={code.js.deploy_bash.code} />
      <p>
        You just deployed to AWS with scale to infinity and beyond! How's that
        for a quick-start guide?
      </p>
    </div>

    <ul className="grid w-full">
      <GlowingGridItem
        area="[sm:grid-area:1/1/1/1]"
        blur={0.25}
        inactiveZone={0.07}
        proximity={80}
        spread={120}
        variant="default"
        glow={true}
        className=""
        movementDuration={1}
        borderWidth={1}
        disabled={false}
      >
        <Button
          variant="plain"
          className="h-auto px-8 py-6 text-lg text-white bg-transparent"
          onClick={() =>
            window.open("https://docs.less.chuva.io/rest-apis", "_blank")
          }
        >
          Read the REST API documentation
        </Button>
      </GlowingGridItem>
    </ul>
  </div>
);
