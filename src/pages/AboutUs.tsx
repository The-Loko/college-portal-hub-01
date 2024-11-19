import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <section className="mb-20">
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
          </section>

          <section className="mb-20" id="contact">
            <h2 className="text-3xl md:text-4xl font-bold text-college-primary mb-12 animate-fade-up">
              Contact Us
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8 animate-fade-up">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-college-accent w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-college-primary mb-2">Visit Us</h3>
                    <p className="text-college-muted">
                      123 University Avenue<br />
                      College Town, ST 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-college-accent w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-college-primary mb-2">Call Us</h3>
                    <p className="text-college-muted">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-college-accent w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-college-primary mb-2">Email Us</h3>
                    <p className="text-college-muted">info@university.edu</p>
                  </div>
                </div>
              </div>
              <div className="bg-college-light p-8 rounded-xl animate-fade-up">
                <h3 className="text-2xl font-semibold text-college-primary mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-college-primary mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-college-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-college-primary mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-college-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-college-primary mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-college-accent focus:border-transparent"
                    ></textarea>
                  </div>
                  <button className="w-full bg-college-accent text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>

          <section id="apply" className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-college-primary mb-12">
              Apply Now
            </h2>
            <div className="bg-college-light p-8 rounded-xl">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-college-primary mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-college-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-college-primary mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-college-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-college-primary mb-1">
                    Program of Interest
                  </label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-college-accent focus:border-transparent">
                    <option>Select a program</option>
                    <option>Computer Science</option>
                    <option>Business Administration</option>
                    <option>Engineering</option>
                  </select>
                </div>
                <button className="w-full bg-college-accent text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                  Submit Application
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;