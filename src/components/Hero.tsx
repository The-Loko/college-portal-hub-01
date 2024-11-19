const Hero = () => {
  return (
    <section className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center">
        <div className="absolute inset-0 bg-college-primary/70 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl text-white space-y-6 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Shape Your Future at Our University
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Join a community of innovators, leaders, and changemakers. Your journey to excellence starts here.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#apply"
              className="bg-college-accent hover:bg-opacity-90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Apply Now
            </a>
            <a
              href="#programs"
              className="bg-white hover:bg-gray-100 text-college-primary px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;