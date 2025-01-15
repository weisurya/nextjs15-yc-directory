import { StartupTypeCard } from "./StartupCard";

import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import StartupCard from "./StartupCard";

export default async function UserStartups({ id }: { id: string }) {
  const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id })

  return (
    <>
      {startups?.length > 0 ? startups.map((startup: StartupTypeCard) => {
        return <StartupCard key={startup?._id} post={startup} />
      }) : <p className="no-result">No startups found</p>}
    </>
  )
}
