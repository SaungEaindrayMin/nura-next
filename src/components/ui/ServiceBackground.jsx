import { motion, useScroll, useTransform } from "framer-motion";

const ServiceBackground = ({ sectionRefs }) => {

  const {
    transitionRef,
    imageStackRef,
    textRevealRef,
    partnershipRef,
    listRef,
    slideSectionRef,
    latestRef,
  } = sectionRefs;


  const { scrollYProgress: transitionProgress } = useScroll({
    target: transitionRef,
    offset: ["start end", "end start"],
  });
  const transitionOpacity = useTransform(
    transitionProgress,
    [0, 0.5, 1],
    [0, 1, 0],
  );

  const { scrollYProgress: imageStackProgress } = useScroll({
    target: imageStackRef,
    offset: ["start end", "end start"],
  });

  const imageStackOpacity = useTransform(
    imageStackProgress,
    [0.1, 0.4, 0.8],
    [0, 1, 1],
  );

  const { scrollYProgress: textRevealProgress } = useScroll({
    target: textRevealRef,
    offset: ["start end", "end start"],
  });
  const textRevealOpacity = useTransform(textRevealProgress, [0, 0.5], [0, 1]);

  const { scrollYProgress: partnershipProgress } = useScroll({
    target: partnershipRef,
    offset: ["start end", "end start"],
  });

  const partnershipOpacity = useTransform(
    partnershipProgress,
    [0.1, 0.5],
    [0, 1],
  );


  const { scrollYProgress: listProgress } = useScroll({
    target: listRef,
    offset: ["start end", "end start"],
  });
  const listOpacity = useTransform(listProgress, [0, 0.2], [0, 1]);

  const { scrollYProgress: latestProgress } = useScroll({
    target: latestRef,
    offset: ["start end", "end end"],
  });
  const latestOpacity = useTransform(
    latestProgress,
    [0.1, 0.5, 0.85, 1],
    [0, 1, 1, 0],
  );

  const { scrollYProgress: getInTouch } = useScroll({
    target: slideSectionRef,
    offset: ["start end", "end end"],
  });
  const getInTouchOpacity = useTransform(
    getInTouch,
    [0.05, 0.3], 
    [0, 1],
  );

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none bg-[#000000]">

      <motion.div
        style={{ opacity: transitionOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-[#013E46] via-[#00818E] to-[#00CFE7]"
      />

      <motion.div
        style={{ opacity: transitionOpacity }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#00CFE7] blur-[120px] mix-blend-screen"
      />

      <motion.div
        style={{ opacity: imageStackOpacity }}
        className="absolute inset-0  bg-gradient-to-br from-[#00CFE7] to-[#FFFF]"
      />
      <motion.div
        style={{ opacity: textRevealOpacity }}
        className="absolute inset-0 bg-white"
      />

      <motion.div
        style={{ opacity: partnershipOpacity }}
        className="absolute inset-0 bg-[#B69AFF]"
      />

      <motion.div
        style={{ opacity: listOpacity }}
        className="absolute inset-0 bg-[#7640FF]"
      />

      <motion.div
        style={{ opacity: latestOpacity }}
        className="absolute inset-0 bg-gradient-to-br from-[#7640FF] to-[#5D2ED2]"
      />

      <motion.div
        style={{ opacity: getInTouchOpacity }}
        className="absolute inset-0 bg-gradient-to-br from-[#241254] to-[#070314]"
      />
    </div>
  );
};

export default ServiceBackground;
