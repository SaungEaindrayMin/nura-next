import { motion, useScroll, useTransform } from "framer-motion";

const ServiceBackground = ({ sectionRefs }) => {
  const { scrollYProgress } = useScroll();

  // Define transition points based on approximate section heights relative to total page height.
  // Since we don't have exact heights, we'll try to use scroll ranges or link to the specific section refs if possible.
  // However, linking to refs for a global background can be tricky if sections vary in height excessively.
  // A robust way component-wise is checking overlap, but keeping it simple with useTransform on global scroll
  // or refined ranges is better for performance than multiple intersection observers for a background.

  // Actually, the user prompt implies strictly "when scrolling between service sections".
  // Let's try to map specific generic ranges first, but ideally we'd use the refs passed in to exact start/end.
  // For now, let's use a layered approach where each layer's opacity is controlled by the visibility of that section.
  // But wait, useScroll({ target: ref }) is component scoped.
  // We can just render a fixed background *inside* each component? No, has to be global for seamless blend.

  // Better approach: This component expects the refs. But 'useScroll' with 'target' needs to run per component usually?
  // No, we can run multiple useScroll hooks here if we have the refs!

  const {
    heroRef,
    transitionRef,
    imageStackRef,
    textRevealRef,
    partnershipRef,
    listRef,
    slideSectionRef,
    latestRef,
  } = sectionRefs;

  // -- 1. Hero (Black) --
  // Base background is black, so no need to fade it in/out explicitly, just layer others on top.

  // -- 2. Transition Section (Cyan / Gradient) --
  // Transition logic: "Hero -> Transition must be smooth ... animation blur color transition"
  // User images show a deep teal/black fading into a cyan/blue.
  const { scrollYProgress: transitionProgress } = useScroll({
    target: transitionRef,
    offset: ["start end", "end start"],
  });
  const transitionOpacity = useTransform(
    transitionProgress,
    [0, 0.5, 1],
    [0, 1, 0],
  );

  // -- 3. Image Stack (White) --
  // "Transition -> Image Stack: smooth ... blur color transition"
  const { scrollYProgress: imageStackProgress } = useScroll({
    target: imageStackRef,
    offset: ["start end", "end start"],
  });
  // Fades in white as it enters, stays white, fades out potentialy if next section needs it.
  const imageStackOpacity = useTransform(
    imageStackProgress,
    [0.1, 0.4, 0.8],
    [0, 1, 1],
  );

  // -- 4. Text Reveal (White -> ???) --
  // User didn't specify transition FROM ImageStack TO TextReveal explicitly in the numbered list,
  // but said "Third one... TextReveal to Partnership".
  // Assuming TextReveal keeps the white background from ImageStack or blends gently.
  // Let's keep it White to match the flow (likely TextReveal is white/light).
  const { scrollYProgress: textRevealProgress } = useScroll({
    target: textRevealRef,
    offset: ["start end", "end start"],
  });
  const textRevealOpacity = useTransform(textRevealProgress, [0, 0.5], [0, 1]);

  // -- 5. Partnership (Purple) --
  // "TextReveal -> Partnership ... smooth ... blur color transition"
  // Previous code had white -> purple transition *inside* Partnership.
  const { scrollYProgress: partnershipProgress } = useScroll({
    target: partnershipRef,
    offset: ["start end", "end start"],
  });
  // Fade to purple
  const partnershipOpacity = useTransform(
    partnershipProgress,
    [0.1, 0.5],
    [0, 1],
  );

  // -- 6. List (Purple) --
  // "Partnership -> List ... smooth"
  // List section seems to be Purple in the existing code (`bg-[#6D5CFF]`).
  // So we just maintain the purple.
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
    [0.05, 0.3], // Start fading in as soon as it enters
    [0, 1],
  );

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none bg-[#000000]">
      {/* 1. Base Layer: Black (Default) */}

      {/* 2. Cyan Layer (Transition Section) */}
      <motion.div
        style={{ opacity: transitionOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-[#013E46] via-[#00818E] to-[#00CFE7]"
      />
      {/* Added blur element for the "morphing" feel */}
      <motion.div
        style={{ opacity: transitionOpacity }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#00CFE7] blur-[120px] mix-blend-screen"
      />

      {/* 3. White Layer (Image Stack & Text Reveal) */}
      {/* Combined opacity max of imageStack and textReveal could determine white layer, 
          but simplistic additive stacking works if we are careful with z-index or order. */}
      <motion.div
        style={{ opacity: imageStackOpacity }}
        className="absolute inset-0  bg-gradient-to-br from-[#00CFE7] to-[#FFFF]"
      />
      <motion.div
        style={{ opacity: textRevealOpacity }}
        className="absolute inset-0 bg-white"
      />

      {/* 4. Purple Layer (Partnership & List) */}
      <motion.div
        style={{ opacity: partnershipOpacity }}
        className="absolute inset-0 bg-[#B69AFF]"
      />

      {/* Intensify purple for List if needed, or stick to same #6D5CFF */}
      <motion.div
        style={{ opacity: listOpacity }}
        className="absolute inset-0 bg-[#7640FF]"
      />

      {/* 5. Dark/Gradient Layer (Latest) */}
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
