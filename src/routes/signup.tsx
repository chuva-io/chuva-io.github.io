import { createFileRoute, redirect } from "@tanstack/react-router";
import Header from "../components/Header";

export const Route = createFileRoute("/signup")({
  beforeLoad: async ({ context }) => {
    const isAuthenticated = context.authentication.isAuthenticated();
    if (isAuthenticated) {
      throw redirect({ to: "/dashboard" });
    }
  },
  component: () => (
    <>
      <Header />
      <RouteComponent />
    </>
  ),
});

function RouteComponent() {
  return <div>Hello "/signup"!</div>;
}
