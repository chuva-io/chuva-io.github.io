import RestApis from "./RestApis";
import WebSockets from "./WebSockets";
import TopicsSubscribers from "./TopicsSubscribers";
import CloudFunctions from "./CloudFunctions";
import FileStorage from "./FileStorage";
import KeyValueStore from "./KeyValueStore";
import CronJobs from "./CronJobs";
import Deploy from "./Deploy";
import Tabs from "@/components/TabBar";
import GradientText from "@/components/GradientText";
import { Button } from "@/components/ui/button";
import GlowingGridItem from "@/components/GlowingGridItem";

const data = [
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
    id: "Topics / Subscribers",
    title: "Topics / Subscribers",
    content: <TopicsSubscribers />,
  },
  {
    id: "Cloud Functions",
    title: "Cloud Functions",
    content: <CloudFunctions />,
  },
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
  {
    id: "CRON Jobs",
    title: "CRON Jobs",
    content: <CronJobs />,
  },
  {
    id: "Deploy",
    title: "Deploy",
    content: <Deploy />,
  },
];

export default () => {
  return (
    <div className="flex flex-col justify-center gap-16">
      <div>
        <h1>
          <GradientText text="YOUR AWS SERVERLESS SUPER HERO" />
        </h1>
        <h2>Write your functions and deploy them to AWS in seconds.</h2>
        <h2>No cloud experience necessary.</h2>
      </div>

      <Tabs tabs={data} />

      <ul className="w-full max-w-xs mx-auto">
        <GlowingGridItem
          // area="[grid-area:1/1/1/1]"
          blur={0.25}
          inactiveZone={0.07}
          proximity={80}
          spread={120}
          variant="default"
          glow={true}
          movementDuration={1}
          borderWidth={1}
          disabled={false}
        >
          <Button
            variant="plain"
            onClick={() => window.open("https://docs.less.chuva.io", "_blank")}
          >
            Read the Docs
          </Button>
        </GlowingGridItem>
      </ul>
    </div>
  );
};
