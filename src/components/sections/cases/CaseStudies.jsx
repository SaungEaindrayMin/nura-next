import { motion } from "framer-motion";
import { useState } from "react";
import { useMovies, useGenres } from "../../../api/queries";
import Loader from "../../ui/Loader";
import ErrorMessage from "../../ui/ErrorMessage";

const CaseStudies = () => {
  const { data: movies, isLoading, error, refetch } = useMovies(10);
  const { data: genres } = useGenres();
  const [activeTab, setActiveTab] = useState("");

  const caseStudies = movies
    ? movies.map((movie) => ({
        id: movie.id,
        title: movie.title,
        description: movie.overview.substring(0, 120) + "...",
        image: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "https://via.placeholder.com/500x750?text=No+Image",
        category:
          genres?.find((g) => movie.genre_ids.includes(g.id))?.name || "Other",
      }))
    : [];

  const uniqueCategories = [...new Set(caseStudies.map((m) => m.category))];
  const categories = uniqueCategories.map((cat) => ({
    name: cat,
    count: caseStudies.filter((s) => s.category === cat).length,
  }));

  if (!activeTab && categories.length > 0) setActiveTab(categories[0].name);

  const filteredStudies = caseStudies.filter((s) => s.category === activeTab);

  return (
    <div className="min-h-screen font-grotesk">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sticky top-16 z-50 bg-secondary flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-16 border-y border-black py-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveTab(category.name)}
                className={` text-base sm:text-lg md:text-lg font-medium tracking-wider transition-colors relative ${
                  activeTab === category.name ? "text-black" : "text-gray-500"
                }`}
              >
                {category.name} [{category.count}]
              </button>
            ))}
          </div>

          {isLoading && (
            <div className="flex justify-center py-20">
              <Loader />
            </div>
          )}

          {error && (
            <ErrorMessage
              message="Failed to load movies"
              onRetry={() => refetch()}
            />
          )}

          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {filteredStudies.map((movie, index) => (
              <motion.div
                key={movie.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div
                    className="relative w-full aspect-[3/2] rounded-sm overflow-hidden cursor-none"
                    data-cursor="view"
                  >
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-black mb-4 sm:mb-6 lg:mb-8 leading-tight">
                    {movie.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-lg font-medium">
                    {movie.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
