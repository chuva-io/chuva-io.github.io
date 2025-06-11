import TypewriterText from "@/components/TypewriterText";
import GradientText from "@/components/GradientText";

const images = {
  aws: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/6579cfcabcbb267186562ac1_mdi_aws.svg",
    alt: "AWS",
  },
  google: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/6579ccf90bb2ef7e665a52c0_simple-icons_googlecloud.svg",
    alt: "Google Cloud",
  },
  azure: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/6579ccf9c5e0a711a9a8a94b_teenyicons_azure-solid.svg",
    alt: "Microsoft Azure",
  },
};

export default () => (
  <div className="flex flex-col items-center gap-20">
    {/* Deploy to the cloud section */}
    <div className="flex flex-col gap-8">
      <h1>
        <GradientText text="DEPLOY TO THE CLOUD" />
      </h1>

      {/* Icons */}
      <div className="flex justify-center gap-10 ">
        {/* AWS */}
        <img
          src={images.aws.src}
          alt={images.aws.alt}
          className="size-10 sm:size-14"
        />

        <div className="h-12 mt-1 border-l-1 border-chuva-white" />

        <div>
          <div className="flex gap-8">
            {/* Google */}
            <img
              src={images.google.src}
              alt={images.google.alt}
              className="size-10 sm:size-14"
            />
            {/* Azure */}
            <img
              src={images.azure.src}
              alt={images.azure.alt}
              className="size-10 sm:size-14"
            />
          </div>

          <p className="text-sm text-chuva-white/70">coming soon</p>
        </div>
      </div>
    </div>

    <div className="w-full text-2xl font-light sm:text-4xl">
      There is no easier way to
      <br />
      create and deploy your serverless
      <br />
      <TypewriterText
        delayBetweenWords={1500}
        words={[
          { text: "REST APIs", className: "text-chuva-blue" },
          { text: "WebSockets", className: "text-chuva-green" },
          { text: "Topics / Subscribers", className: "text-chuva-orange" },
          { text: "AI Workflows", className: "text-chuva-blue" },
          { text: "Queues", className: "text-chuva-green" },
          { text: "CRON Jobs", className: "text-chuva-yellow" },
          { text: "Workers", className: "text-chuva-orange" },
        ]}
      />
    </div>
  </div>
);
