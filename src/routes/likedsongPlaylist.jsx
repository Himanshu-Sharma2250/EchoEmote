import { createFileRoute } from '@tanstack/react-router'

import LikedPage from "../pages/LikedPage"

export const Route = createFileRoute('/likedsongPlaylist')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LikedPage/>
}
