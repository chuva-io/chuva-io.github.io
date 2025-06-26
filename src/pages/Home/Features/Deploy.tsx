import CodeBlock from "@/components/CodeBlock";

const code = {
  deploy: {
    command: {
      code: `npx @chuva.io/less-cli deploy my-less-project`,
    },
  },
};

export default (): React.ReactNode => (
  <CodeBlock language="bash" code={code.deploy.command.code} />
);
