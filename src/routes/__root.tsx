import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Dashboard from "../components/DashboardLayout";
import Header from "../components/Header";

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <Header />
        <SignedOut>
          <h1>Home Page</h1>
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
