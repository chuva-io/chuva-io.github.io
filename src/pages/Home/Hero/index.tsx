import GlowingButton from "@/components/GlowingButton";
import GradientText from "@/components/GradientText";

export default () => (
  <div className="flex flex-col items-center justify-center gap-12 ">
    <h1>
      Do more with <GradientText text="Less" />
    </h1>

    <div className="space-y-4">
      <p className="max-w-3xl">
        Build <span className="line-through">Server</span>Less AWS applications
        locally and deploy them to production with zero cloud config or DevOps
        work!
      </p>

      <p className="max-w-3xl">
        If you are reading this, you are now an AWS serverless expert!{" "}
        <em>Seriously.</em>
      </p>
    </div>

    {/* Glowing buttons */}
    <div className="flex flex-col w-full gap-2 sm:flex-row">
      <GlowingButton
        title={"Read the Docs"}
        href={"https://docs.less.chuva.io"}
        newTab
      />
      <GlowingButton
        title={"Get Started"}
        href={"https://docs.less.chuva.io/quick-start"}
        newTab
      />
    </div>
  </div>
);
