const NewsEvents = () => {
  const news = [
    {
      title: "University Receives Major Research Grant",
      date: "March 15, 2024",
      category: "Research",
    },
    {
      title: "New Innovation Center Opening This Fall",
      date: "March 10, 2024",
      category: "Campus",
    },
    {
      title: "Student Team Wins National Competition",
      date: "March 5, 2024",
      category: "Achievement",
    },
  ];

  return (
    <section id="news" className="py-20 bg-college-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-college-primary text-center mb-12">
          News & Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="text-sm text-college-accent font-medium mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl font-semibold text-college-primary mb-2">
                  {item.title}
                </h3>
                <time className="text-college-muted">{item.date}</time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;