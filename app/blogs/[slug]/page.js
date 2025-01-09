import BackButton from "@/components/ui/BackButton";
export default async function Page({ params }) {
  const slug = (await params).slug;
  return (
    <main className="min-h-screen flex  ">
      <BackButton />
      <div className="">My Post: {slug}</div>
    </main>
  );
}
