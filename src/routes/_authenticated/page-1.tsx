import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/page-1")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/page-1"!</div>;
}
