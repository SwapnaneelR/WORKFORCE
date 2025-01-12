import { client } from "@/sanity/lib/client";
import { VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { Button } from "./button";
const View = async ({ id }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(VIEWS_QUERY, { id });

  await writeClient
    .patch(id)
    .set({ views: totalViews + 1 })
    .commit();

  return (
    <Button className="text-white font-semibold" variant="ghost">
      Views: {totalViews}
    </Button>
  );
};

export default View;
