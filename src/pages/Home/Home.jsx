import Footer from "../../components/layout/Footer";
import HomePage from "../../components/sections/home/HomePage";
import SlideSections from "../../components/ui/SlideSections";

const Home = () => {
  return (
    <>
        <SlideSections>
          {[<HomePage key="g" />, <Footer key="f" />]}
        </SlideSections>
    </>
  );
};

export default Home;
