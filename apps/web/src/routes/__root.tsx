import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Header from "@/components/Header";
import Dashboard from "@/components/DashboardLayout";
import Home from "@/pages/Home";

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <Header />
        <SignedOut>
          <Home />
        </SignedOut>
        <SignedIn>
          <Dashboard>
            <Outlet />
          </Dashboard>
        </SignedIn>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
