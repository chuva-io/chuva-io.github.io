import { createFileRoute, redirect } from "@tanstack/react-router";
import DashboardLayout from "../components/DashboardLayout";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context }) => {
    const isAuthenticated = context.authentication.isAuthenticated();
    if (!isAuthenticated) {
      throw redirect({ to: "/signin" });
    }
  },
  component: DashboardLayout,
});
