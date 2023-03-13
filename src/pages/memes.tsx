/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Meme = {
  [x: string]: string | undefined;
  title: string;
  url: string;
};

const placeholderImgUrl =
  "https://via.placeholder.com/400x400.png?text=Image+Not+Found";

export default function Memes() {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://api.memegen.link/images`)
      .then((response) => response.json())
      .then((data) => {
        setMemes(data);
        setIsLoading(false);
      });
  }, []);

  function handleMemeClick(meme: Meme) {
    setSelectedMeme(meme);
  }

  function handleCloseModal() {
    setSelectedMeme(null);
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Next Memes</h1>
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
            {memes.map((meme) => (
              <motion.div
                key={meme.url}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleMemeClick(meme)}
              >
                <img
                  src={meme.url}
                  alt={meme.title}
                  className="h-64 w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = placeholderImgUrl;
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {selectedMeme && (
        <div
          className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-full max-h-full overflow-auto">
            <img
              src={selectedMeme.url}
              alt={selectedMeme.title}
              className="h-auto w-full object-contain"
              onError={(e) => {
                e.currentTarget.src = placeholderImgUrl;
              }}
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
