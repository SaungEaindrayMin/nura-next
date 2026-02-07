import { useRef, useState, useEffect } from "react";
import ServiceBackground from "../../components/ui/ServiceBackground";
import ServiceHero from "../../components/sections/services/ServiceHero";
import ServiceTransition from "../../components/sections/services/ServiceTransition";
import ServiceImageStack from "../../components/sections/services/ServiceImageStack";
import ServiceTextReveal from "../../components/sections/services/ServiceTextReveal";
import ServicePartnership from "../../components/sections/services/ServicePartnership";
import ServiceList from "../../components/sections/services/ServiceList";
import SlideSections from "../../components/ui/SlideSections";
import GetInTouch from "../../components/sections/cases/GetInTouch";
import Footer from "../../components/layout/Footer";
import ServiceLatest from "../../components/sections/services/ServiceLatest";

const Services = () => {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);
  const transitionRef = useRef(null);
  const imageStackRef = useRef(null);
  const textRevealRef = useRef(null);
  const partnershipRef = useRef(null);
  const listRef = useRef(null);
  const latestRef = useRef(null);
  const slideSectionRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <ServiceBackground
          sectionRefs={{
            heroRef,
            transitionRef,
            imageStackRef,
            textRevealRef,
            partnershipRef,
            listRef,
            latestRef,
            slideSectionRef,
          }}
        />
      )}

      <div ref={heroRef} className="relative z-10">
        <ServiceHero />
      </div>
      <div ref={transitionRef} className="relative z-10">
        <ServiceTransition />
      </div>
      <div ref={imageStackRef} className="relative z-10">
        <ServiceImageStack />
      </div>
      <div ref={textRevealRef} className="relative z-10">
        <ServiceTextReveal />
      </div>
      <div ref={partnershipRef} className="relative z-10">
        <ServicePartnership />
      </div>
      <div ref={listRef} className="relative z-10">
        <ServiceList />
      </div>
      <div ref={latestRef} className="relative z-10">
        <ServiceLatest />
      </div>

      <div ref={slideSectionRef} className="relative z-10">
        <SlideSections>
          {[<GetInTouch key="g" serviceMode={true} />, <Footer key="f" />]}
        </SlideSections>
      </div>
    </>
  );
};

export default Services;
