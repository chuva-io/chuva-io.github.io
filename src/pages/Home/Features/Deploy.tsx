import CodeBlock from "@/components/CodeBlock";

const code = {
  deploy: {
    command: {
      filename: "Terminal",
      code: `# Deploy your Less application
npx @chuva.io/less-cli deploy my-less-project

# Output:
[less-cli] Deployment complete ✅
[less-cli] Resources
[less-cli]   - API URLs
[less-cli]     - REST API: https://my-project.api.eu-0.a83b464c9.less.chuva.cv
[less-cli]     - Topics: https://my-project-topics.api.eu-0.a83b464c9.less.chuva.cv
[less-cli]     - Functions: https://my-project-functions.api.eu-0.a83b464c9.less.chuva.cv
[less-cli]   - WebSocket URLs
[less-cli]     - demo: wss://my-project-demo.ws.eu-0.4dd0b49.less.chuva.cv
[less-cli] 🇨🇻`,
    },
  },
  structure: {
    project: {
      filename: "Project Structure",
      code: `my-less-project/
├── less/
│   ├── apis/
│   │   └── users/
│   │       ├── get.js
│   │       └── post.js
│   ├── sockets/
│   │   └── chat/
│   │       ├── connect/
│   │       └── message/
│   ├── topics/
│   │   └── user_created/
│   │       └── send_email/
│   ├── functions/
│   │   └── calculate/
│   ├── crons/
│   │   └── daily_report/
│   └── static/
│       └── index.html
└── less.config`,
    },
  },
};

export default (): React.ReactNode => (
  <div className="pb-20">
    <div>
      <p>
        In order to deploy your application or service, execute the Less CLI
        deploy command with your application name. With Less your traffic is
        secure on AWS using HTTPS and WSS automatically.
      </p>
      <ul className="my-4 space-y-2">
        <li>• One-command deployment</li>
        <li>• Automatic HTTPS and WSS</li>
        <li>• Infrastructure provisioning</li>
        <li>• Zero configuration required</li>
        <li>• Multiple environment support</li>
        <li>• Instant global scaling</li>
      </ul>
    </div>

    <div className="space-y-6">
      <div>
        <h4 className="mb-2 text-lg font-semibold">Deployment Command</h4>
        <CodeBlock
          language="bash"
          filename={code.deploy.command.filename}
          code={code.deploy.command.code}
        />
      </div>

      <div>
        <h4 className="mb-2 text-lg font-semibold">Project Structure</h4>
        <CodeBlock
          language="bash"
          filename={code.structure.project.filename}
          code={code.structure.project.code}
        />
      </div>
    </div>
  </div>
);
