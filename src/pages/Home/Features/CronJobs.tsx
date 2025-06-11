import CodeBlock from "@/components/CodeBlock";

const code = {
  js: {
    cronJob: {
      filename: "less/crons/generate_daily_report/index.js",
      code: `const { kvs, topics } = require('@chuva.io/less');

exports.process = async () => {
  console.log('Generating daily report...');
  
  // Fetch data for the report
  const users = await kvs.get('users_count');
  const sales = await kvs.get('daily_sales');
  
  const report = {
    date: new Date().toISOString().split('T')[0],
    users,
    sales,
    generated_at: new Date()
  };
  
  // Store the report
  await kvs.set(\`report:\${report.date}\`, report);
  
  // Notify stakeholders
  await topics.report_generated.publish(report);
  
  console.log('Daily report generated successfully');
};`,
    },
  },
  config: {
    cronSchedule: {
      filename: "less.config",
      code: `env_vars:
  - CRON_GENERATE_DAILY_REPORT

# Set the environment variable:
# export CRON_GENERATE_DAILY_REPORT="0 0 * * ? *"`,
    },
  },
};

export default (): React.ReactNode => (
  <div className="pb-20">
    <div>
      <p>
        In order to create CRON jobs, just add a crons folder to /less. Each
        CRON Job is just another folder inside of /less/crons. Schedule jobs
        using standard CRON expressions.
      </p>
      <ul className="my-4 space-y-2">
        <li>• Standard CRON expression syntax</li>
        <li>• Automatic scaling and reliability</li>
        <li>• Integration with all Less features</li>
        <li>• Environment-based scheduling</li>
        <li>• Built-in error handling and retries</li>
      </ul>
    </div>

    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold mb-2">CRON Job Implementation</h4>
        <CodeBlock
          language="javascript"
          filename={code.js.cronJob.filename}
          code={code.js.cronJob.code}
        />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Schedule Configuration</h4>
        <CodeBlock
          language="bash"
          filename={code.config.cronSchedule.filename}
          code={code.config.cronSchedule.code}
        />
      </div>
    </div>
  </div>
);
