import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-college-primary mb-12 animate-fade-up">
          Contact Us
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-up">
            <div className="flex items-start space-x-4">
              <MapPin className="text-college-accent w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-college-primary mb-2">
                  Visit Us
                </h3>
                <p className="text-college-muted">
                  123 University Avenue
                  <br />
                  College Town, ST 12345
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="text-college-accent w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-college-primary mb-2">
                  Call Us
                </h3>
                <p className="text-college-muted">(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="text-college-accent w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-college-primary mb-2">
                  Email Us
                </h3>
                <p className="text-college-muted">info@university.edu</p>
              </div>
            </div>
          </div>
          <div className="bg-college-light p-8 rounded-xl animate-fade-up">
            <h3 className="text-2xl font-semibold text-college-primary mb-6">
              Send us a Message
            </h3>
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
      </div>
    </div>
  );
};

export default Contact;