import SearchPage from "@/components/SearchPage";

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1 className='text-center mt-10 text-xl font-semibold'>Solace Advocates</h1>
      <SearchPage />
    </main>
  );
}
