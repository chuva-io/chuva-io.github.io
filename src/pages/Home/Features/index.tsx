import RestApis from "./RestApis";
import WebSockets from "./WebSockets";
import PubSub from "./PubSub";
import CloudFunctions from "./CloudFunctions";
import FileStorage from "./FileStorage";
import KeyValueStore from "./KeyValueStore";
import CronJobs from "./CronJobs";
import Deploy from "./Deploy";
import Tabs from "@/components/TabBar";
import GradientText from "@/components/GradientText";
import GlowingButton from "@/components/GlowingButton";

const functions = [
  {
    id: "REST APIs",
    title: "REST APIs",
    content: <RestApis />,
  },
  {
    id: "Web Sockets",
    title: "Web Sockets",
    content: <WebSockets />,
  },
  {
    id: "Pub/Sub",
    title: "Pub/Sub",
    content: <PubSub />,
  },
  {
    id: "CRON Jobs",
    title: "CRON Jobs",
    content: <CronJobs />,
  },
  {
    id: "Cloud Functions",
    title: "Cloud Functions",
    content: <CloudFunctions />,
  },
];

const additionalFeatures = [
  {
    id: "File Storage",
    title: "File Storage",
    content: <FileStorage />,
  },
  {
    id: "Key-Value Store",
    title: "Key-Value Store",
    content: <KeyValueStore />,
  },
];

export default () => {
  return (
    <div className="flex flex-col justify-center gap-60">
      {/* Title section */}
      <div>
        <h1>
          <GradientText text="YOUR AWS SERVERLESS SUPER HERO" />
        </h1>
        <h2>Write your functions and deploy them to AWS in seconds.</h2>
        <h2>No cloud experience necessary.</h2>
      </div>

      {/* Steps section */}
      <ol className="flex flex-col gap-30">
        {/* Code */}
        <li className="flex flex-col gap-8">
          <p>
            <GradientText text="Step 1:" /> Write your Less function
          </p>
          <Tabs tabs={functions} />
        </li>

        {/* Deploy */}
        <li className="flex flex-col gap-8">
          <p>
            <GradientText text="Step 2:" /> Deploy with a single command
          </p>
          <Deploy />
        </li>
      </ol>

      <GlowingButton
        title={"Read the Docs"}
        href={"https://docs.less.chuva.io"}
        newTab
      />

      {/* Additional features section */}
      <div className="flex flex-col gap-8">
        <p>
          All Less functions have access to the Key-Value Store and File Storage
          and can publish messages to your Topics.
        </p>
        <Tabs tabs={additionalFeatures} />
      </div>
    </div>
  );
};
