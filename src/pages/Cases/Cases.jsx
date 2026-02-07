import Footer from "../../components/layout/Footer";
import CaseStudies from "../../components/sections/cases/CaseStudies";
import GetInTouch from "../../components/sections/cases/GetInTouch";
import Hero from "../../components/sections/cases/Hero";
import SlideSections from "../../components/ui/SlideSections";

const Cases = () => {
  return (
    <>
      <Hero />
      <CaseStudies />

      <SlideSections>
        {[<GetInTouch key="g" />, <Footer key="f" />]}
      </SlideSections>
    </>
  );
};

export default Cases;
