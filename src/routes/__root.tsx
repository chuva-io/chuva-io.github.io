import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Dashboard from "@/components/DashboardLayout";
import NavigationMenu from "@/components/NavigationMenu";
import Home from "@/pages/Home";

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 py-4 overflow-hidden">
        <NavigationMenu />
      </header>
      <div>
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
