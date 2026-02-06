import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMovies } from "../../../api/queries";

const Card = ({ i, title, subtitle, image, progress, range, targetScale }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          backgroundColor: "#FFFFFF",
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative flex flex-col w-[90vw] md:w-[70vw] h-[60vh] rounded-3xl overflow-hidden shadow-2xl origin-top"
      >
        <div className="absolute inset-0 z-0">
          <motion.div
            style={{ scale: imageScale }}
            className="w-full h-full bg-cover bg-center absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
          >
            {image ? (
              <img
                src={`https://image.tmdb.org/t/p/original${image}`}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-800" />
            )}

            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors duration-500" />
          </motion.div>
        </div>

        <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-12">
          <div className="self-end">
            <span className="text-white font-medium tracking-wider uppercase border-b border-white pb-1">
              {subtitle}
            </span>
          </div>

          <h3 className="text-3xl md:text-5xl font-bold text-white uppercase text-center leading-tight drop-shadow-lg">
            {title}
          </h3>

          <div />
        </div>
      </motion.div>
    </div>
  );
};

const ServiceImageStack = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { data: movies, isLoading } = useMovies(5);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.2, 1],
    ["#0FFFFF", "#FFFFFF"],
  );

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl animate-pulse">
          Loading Projects...
        </div>
      </section>
    );
  }

  return (
    <motion.section ref={containerRef} className="relative pb-24 font-grotesk">
      {/* Gradient overlay REMOVED */}

      {movies?.map((movie, i) => {
        const targetScale = 1 - (movies.length - i) * 0.05;
        return (
          <Card
            key={movie.id}
            i={i}
            title={movie.title}
            subtitle={movie.release_date?.split("-")[0] || "FEATURED"}
            image={movie.backdrop_path}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </motion.section>
  );
};

export default ServiceImageStack;
