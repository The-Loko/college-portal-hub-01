import React from "react";

const Departments = () => {
  const departments = [
    {
      name: "Computer Science",
      description: "Exploring the frontiers of technology and computation",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    },
    {
      name: "Business Administration",
      description: "Developing future business leaders and entrepreneurs",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    },
    {
      name: "Engineering",
      description: "Innovating solutions for tomorrow's challenges",
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-college-primary mb-12 animate-fade-up">
          Our Departments
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div
              key={dept.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-college-primary mb-2">
                  {dept.name}
                </h3>
                <p className="text-college-muted">{dept.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;