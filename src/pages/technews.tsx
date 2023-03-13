/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import data from "../data/technews.json";
type Article = {
  [x: string]: string | undefined;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
};

const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const PLACEHOLDER_IMAGE_URL =
  "https://via.placeholder.com/150x150.png?text=Image+not+available";

export default function TechNews() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [hoveredImageUrl, setHoveredImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(
  //     `https://newsapi.org/v2/top-headlines?country=us&category=technology&page=${page}&apiKey=${apiKey}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setArticles(data.articles);
  //       setIsLoading(false);
  //     });
  // }, [page]);
  useEffect(() => {
    setIsLoading(true);

    setArticles(
      data.map((article: any) => ({
        ...article,
        urlToImage: article.urlToImage || PLACEHOLDER_IMAGE_URL,
      }))
    );
    setIsLoading(false);
  }, [page]);

  function handlePrevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function handleNextPage() {
    if (articles.length < 10) {
      alert("That's the end of the news.");
    } else {
      setPage(page + 1);
    }
  }

  function handleImageHover(url: string) {
    setHoveredImageUrl(url);
  }

  return (
    <div
      className="bg-gray-100 min-h-screen"
      style={{
        backgroundImage: hoveredImageUrl
          ? `url(${hoveredImageUrl})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Next Tech News</h1>
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <motion.div
            className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {articles?.map((article) => (
              <motion.div
                key={article.url}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={article.urlToImage || PLACEHOLDER_IMAGE_URL}
                  alt={article.title}
                  className="h-48 w-full object-cover"
                  onMouseOver={() =>
                    handleImageHover(
                      article.urlToImage || PLACEHOLDER_IMAGE_URL
                    )
                  }
                  onMouseOut={() => handleImageHover("")}
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                  <p className="text-gray-700">{article.description}</p>
                  <a
                    href={article.url}
                    className="bg-blue-500 text-white py-2 px-4 rounded mt-4 inline-block hover:bg-blue-600"
                  >
                    Read more
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        <div className="flex justify-center my-8">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded mr-4 hover:bg-blue-600"
            onClick={handlePrevPage}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
