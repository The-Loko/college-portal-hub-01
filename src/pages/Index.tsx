import Header from "../components/Header";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import CampusLife from "../components/CampusLife";
import NewsEvents from "../components/NewsEvents";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Programs />
      <CampusLife />
      <Stats />
      <NewsEvents />
      <Footer />
    </div>
  );
};

export default Index;