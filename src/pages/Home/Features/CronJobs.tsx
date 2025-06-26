import CodeBlock from "@/components/CodeBlock";
import GlowingButton from "@/components/GlowingButton";

const code = {
  js: {
    cronJob: {
      filename: "less/crons/generate_daily_report/index.js",
      code: `exports.process = async () => {
  console.log('Generating daily report...');
};`,
    },
  },
  config: {
    cronSchedule: {
      filename: "less.config",
      code: `env_vars:
  - CRON_GENERATE_DAILY_REPORT`,
    },
    exportVars: {
      code: `# Export your environment variables
export CRON_GENERATE_DAILY_REPORT="0 0 * * ? *"`,
    },
  },
};

export default (): React.ReactNode => (
  <div className="flex flex-col items-center gap-8">
    <p className="md:w-2/5">Schedule jobs using standard CRON expressions.</p>

    <CodeBlock
      language="javascript"
      filename={code.js.cronJob.filename}
      code={code.js.cronJob.code}
      className="max-w-full overflow-x-auto md:w-3/5"
    />

    <div className="max-w-full overflow-x-auto md:w-3/5">
      <h4 className="mb-2 text-lg font-semibold">Schedule Configuration</h4>
      <div className="flex flex-col gap-4">
        <CodeBlock
          language="yaml"
          filename={code.config.cronSchedule.filename}
          code={code.config.cronSchedule.code}
        />
        <CodeBlock language="bash" code={code.config.exportVars.code} />
      </div>
    </div>

    <div>
      <GlowingButton
        title={"Visit the CRON Job Documentation"}
        href={"https://less.chuva.io/cron-jobs"}
        newTab
      />
    </div>
  </div>
);
