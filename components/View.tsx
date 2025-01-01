import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";

export default async function View({ id }: { id: string }) {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id })

  // TODO: update views whenever a user views a startup

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">{totalViews} views</span>
      </p>
    </div>
  )
}
