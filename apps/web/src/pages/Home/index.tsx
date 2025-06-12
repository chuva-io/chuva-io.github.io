import BackgroundGradientAnimation from "./BackgroundGradientAnimation";
import type { HelloWorld } from "@chuva-template-monorepo/types";

const helloWorld: HelloWorld = {
  sayHello: (name?: string) => `Hello, ${name ?? "world"}!`,
};

export default function Home() {
  return (
    <BackgroundGradientAnimation className="flex flex-col items-center justify-center gap-32 text-center text-chuva-white">
      <div className="flex flex-col items-center w-screen max-w-6xl gap-40 px-8 overflow-hidden">
        {/* Hero section */}
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1>{helloWorld.sayHello("Universe")}</h1>
          <h1>This is a catchy phrase.</h1>
        </div>

        {/* Another section */}
        <div>
          <h1>This is a Section</h1>
          <h2>This is another catchy phrase.</h2>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
