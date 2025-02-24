import Image from "next/image";

const NewsList = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <div key={index} className="border rounded-lg p-4 shadow-md">
          {article.urlToImage && (
            <Image src={article.urlToImage} alt={article.title} width={400} height={250} className="rounded-md" />
          )}
          <h2 className="text-xl font-bold mt-2">{article.title}</h2>
          <p className="text-sm text-gray-500">By {article.author || "Unknown"}</p>
          <p className="mt-2">{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
