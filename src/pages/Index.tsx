import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
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
      <Sidebar />
      <div className="ml-16 lg:ml-64">
        <Hero />
        <Programs />
        <CampusLife />
        <Stats />
        <NewsEvents />
        <Footer />
      </div>
    </div>
  );
};

export default Index;