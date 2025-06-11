import BackgroundGradientAnimation from "./BackgroundGradientAnimation";
import type { HelloWorld } from "@chuva-template-monorepo/types";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

const helloWorld: HelloWorld = {
  sayHello: (name?: string) => `Hello, ${name ?? "world"}!`,
};

export default function Home() {
  return (
    <BackgroundGradientAnimation className="flex flex-col items-center justify-center gap-32 text-center text-chuva-white">
      <div className="flex flex-col items-center w-screen max-w-6xl gap-40 px-8 overflow-hidden">
        {/* Hero section */}
        <div className="flex flex-col items-center justify-center min-h-screen gap-8">
          <h1 className="mb-4 text-6xl font-bold">
            {helloWorld.sayHello("Universe")}
          </h1>
          <h1 className="mb-8 text-3xl">This is a catchy phrase.</h1>

          {/* Authentication Section */}
          <div className="flex gap-4">
            <SignInButton mode="modal">
              <Button variant="outline" size="lg">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="lg">Sign Up</Button>
            </SignUpButton>
          </div>
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
