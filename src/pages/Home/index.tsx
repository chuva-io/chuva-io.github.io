import BackgroundGradientAnimation from "./BackgroundGradientAnimation";

export default () => (
  <BackgroundGradientAnimation className="flex flex-col items-center justify-center gap-32 text-center text-chuva-white">
    <div className="flex flex-col items-center w-screen max-w-6xl gap-40 px-8 overflow-hidden">
      {/* Hero section */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1>This is a Hero</h1>
        <h2>This is a catchy phrase.</h2>
      </div>

      {/* Another section */}
      <div>
        <h1>This is a Section</h1>
        <h2>This is another catchy phrase.</h2>
      </div>
    </div>
  </BackgroundGradientAnimation>
);
