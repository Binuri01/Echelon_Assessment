import { fetchNews } from "./utils/FetchNews";
import NewsList from "./components/NewsList";

export default async function Home() {
  const articles = await fetchNews();
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Top US Headlines</h1>
      <NewsList articles={articles} />
    </div>
  );
}
