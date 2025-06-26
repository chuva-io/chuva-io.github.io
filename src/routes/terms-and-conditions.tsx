import { createFileRoute } from "@tanstack/react-router";
import component from "@/pages/Terms";

export const Route = createFileRoute("/terms-and-conditions")({
  component,
});
