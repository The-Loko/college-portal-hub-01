import Header from "../components/Header";
import Footer from "../components/Footer";
import { Input } from "@/components/ui/input";

const ApplyNow = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-college-primary mb-8 animate-fade-up">
            Apply Now
          </h1>
          <div className="bg-college-light p-8 rounded-xl animate-fade-up">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-college-primary mb-1">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-college-primary mb-1">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-college-primary mb-1">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full"
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyNow;