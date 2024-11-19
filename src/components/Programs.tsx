const Programs = () => {
  const programs = [
    {
      title: "Computer Science",
      description: "Learn to innovate through technology",
      icon: "💻",
    },
    {
      title: "Business Administration",
      description: "Develop leadership skills for the future",
      icon: "📊",
    },
    {
      title: "Engineering",
      description: "Create solutions for tomorrow",
      icon: "⚡",
    },
    {
      title: "Arts & Sciences",
      description: "Explore the foundations of knowledge",
      icon: "🎨",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-college-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-college-primary mb-4">
            Academic Programs
          </h2>
          <p className="text-college-muted text-lg">
            Choose from our diverse range of programs designed to prepare you for success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold text-college-primary mb-2">
                {program.title}
              </h3>
              <p className="text-college-muted">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;