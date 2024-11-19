import Header from "../components/Header";
import Footer from "../components/Footer";

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
      title: "Campus Life",
      description: "Students enjoying their time in our beautiful campus grounds",
    },
    {
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      title: "Graduation Day",
      description: "Celebrating academic achievements and new beginnings",
    },
    {
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
      title: "Student Activities",
      description: "Engaging in various extracurricular activities and clubs",
    },
    {
      url: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a",
      title: "Library",
      description: "Our state-of-the-art library and study spaces",
    },
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      title: "Sports Events",
      description: "Competitive sports and athletic facilities",
    },
    {
      url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
      title: "Research Labs",
      description: "Advanced research facilities and equipment",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-college-primary mb-12 animate-fade-up">
            Photo Gallery
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-semibold mb-2">
                        {image.title}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-college-primary mb-1">
                    {image.title}
                  </h3>
                  <p className="text-college-muted text-sm">
                    {image.description}
                  </p>
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

export default Gallery;