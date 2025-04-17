import { createFileRoute, redirect } from "@tanstack/react-router";
import Header from "../components/Header";
import SignIn from "@/pages/SignIn";

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
      <SignIn />
    </>
  ),
});
