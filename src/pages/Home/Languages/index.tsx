import GradientText from "@/components/GradientText";
import { SupportedLanguages } from "./Icons";

export default () => (
  <div className="flex flex-col gap-24">
    <div>
      <h1>
        <GradientText text="MULTI-LANGUAGE SUPPORT" />
      </h1>

      <h2>You can even use more than one language in the same project!</h2>
    </div>

    <SupportedLanguages />
  </div>
);
