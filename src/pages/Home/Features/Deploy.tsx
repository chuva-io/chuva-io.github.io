import CodeBlock from "@/components/CodeBlock";

const code = {
  deploy: {
    command: {
      code: `npx @chuva.io/less-cli deploy my-less-project`,
    },
  },
};

export default (): React.ReactNode => (
  <div className="w-full max-w-2xl overflow-x-auto md:w-4/5">
    <CodeBlock language="bash" code={code.deploy.command.code} />
  </div>
);
