const Stats = () => {
  const stats = [
    { number: "20,000+", label: "Students" },
    { number: "1,500+", label: "Faculty Members" },
    { number: "200+", label: "Academic Programs" },
    { number: "95%", label: "Employment Rate" },
  ];

  return (
    <section className="py-20 bg-college-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold text-college-accent mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;