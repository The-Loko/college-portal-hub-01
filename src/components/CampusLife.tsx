const CampusLife = () => {
  const features = [
    {
      title: "Student Organizations",
      description: "Join over 100+ clubs and organizations",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      title: "Modern Facilities",
      description: "Access state-of-the-art learning spaces",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    },
    {
      title: "Campus Housing",
      description: "Experience comfortable on-campus living",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    },
  ];

  return (
    <section id="campus-life" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-college-primary text-center mb-12">
          Campus Life
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusLife;