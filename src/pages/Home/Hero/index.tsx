import GradientText from "@/components/GradientText";
import { Button } from "@/components/ui/button";
import GlowingGridItem from "@/components/GlowingGridItem";

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
      <GlowingGridItem
        // area="[grid-area:1/1/1/1]"
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
          size="lg"
          className=""
          onClick={() => window.open("https://docs.less.chuva.io", "_blank")}
        >
          Read the Docs
        </Button>
      </GlowingGridItem>
      <GlowingGridItem
        // area="[grid-area:1/1/1/1]"
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
        <Button variant="plain" href={"/#getting-started"} size="lg">
          Get Started
        </Button>
      </GlowingGridItem>
    </div>
  </div>
);
