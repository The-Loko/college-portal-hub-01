import Header from "../components/Header";
import Footer from "../components/Footer";

const Facilities = () => {
  const facilities = [
    {
      name: "Modern Library",
      description: "State-of-the-art digital and physical resources",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
    },
    {
      name: "Research Labs",
      description: "Cutting-edge equipment for advanced research",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    },
    {
      name: "Sports Complex",
      description: "World-class facilities for athletics and recreation",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-college-primary mb-12 animate-fade-up">
            Campus Facilities
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={facility.name}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-college-primary mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-college-muted">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Facilities;
