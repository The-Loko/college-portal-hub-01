import React from "react";

const AboutUs = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-college-primary mb-8 animate-fade-up">
          About Our University
        </h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <p className="text-lg text-college-muted leading-relaxed">
              Founded in 1950, our university has been at the forefront of academic excellence
              and innovation. We are committed to providing world-class education and
              fostering an environment of intellectual growth and personal development.
            </p>
            <p className="text-lg text-college-muted leading-relaxed">
              Our mission is to inspire and empower the next generation of leaders,
              innovators, and change-makers through comprehensive education, cutting-edge
              research, and meaningful community engagement.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl animate-fade-up">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
              alt="University Campus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;