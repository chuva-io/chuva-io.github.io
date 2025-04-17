import { createFileRoute, redirect } from "@tanstack/react-router";
import Header from "../components/Header";

export const Route = createFileRoute("/signin")({
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
  return <div>Hello "/signin"!</div>;
}
