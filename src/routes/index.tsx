import { createFileRoute } from "@tanstack/react-router";
import component from "@/pages/Home";

export const Route = createFileRoute("/")({
  component,
});
