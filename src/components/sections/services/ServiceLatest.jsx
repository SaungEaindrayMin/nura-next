import { motion } from "framer-motion";
import { useMovies } from "../../../api/queries";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w780";

const ServiceLatest = () => {
  const { data: movies, isLoading, isError } = useMovies(3);

  return (
    <section className="relative min-h-screen py-24 font-grotesk overflow-hidden">
      <div className="container-custom relative z-20">
        {/* Title */}
        <div className="flex justify-center mb-20">
          <h2
            className="text-6xl md:text-8xl font-bold uppercase tracking-wider text-transparent"
            style={{ WebkitTextStroke: "1px #FFFFFF" }}
          >
            The Latest
          </h2>
        </div>

        {/* Loading State */}
        {isLoading && (
          <p className="text-white text-center text-lg">
            Loading latest projects…
          </p>
        )}

        {/* Error State */}
        {isError && (
          <p className="text-red-300 text-center text-lg">
            Failed to load data. Please try again.
          </p>
        )}

        {/* Card Grid */}
        {movies && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movies.map((movie, i) => (
              <motion.div
                key={movie.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group bg-white rounded-sm overflow-hidden flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={
                      movie.poster_path
                        ? `${IMAGE_BASE_URL}${movie.poster_path}`
                        : "/placeholder.jpg"
                    }
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100 shadow-lg cursor-pointer">
                      <span className="text-[#00C4CC] font-bold text-sm uppercase tracking-widest">
                        View
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-[#00C4CC] text-xl font-bold uppercase mb-4 flex items-center gap-2">
                    <span className="transform -rotate-45">↗</span>
                    {movie.title}
                  </h3>

                  <p className="text-gray-800 text-sm leading-relaxed font-medium line-clamp-4">
                    {movie.overview || "No description available."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceLatest;
