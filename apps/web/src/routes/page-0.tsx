import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/page-0')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/page-0"!</div>
}
