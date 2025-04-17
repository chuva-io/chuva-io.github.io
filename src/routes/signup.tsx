import { createFileRoute, redirect } from "@tanstack/react-router";
import Header from "../components/Header";
import SignUp from "@/pages/SignUp";

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
      <SignUp />
    </>
  ),
});
