import React from "react";

const Admission = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-college-primary mb-8 animate-fade-up">
          Admission Process
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-up">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-college-primary mb-4">
                Requirements
              </h3>
              <ul className="space-y-3 text-college-muted">
                <li>High School Diploma or equivalent</li>
                <li>Minimum GPA of 3.0</li>
                <li>Letters of Recommendation</li>
                <li>Personal Statement</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-college-primary mb-4">
                Application Timeline
              </h3>
              <ul className="space-y-3 text-college-muted">
                <li>Early Decision: November 1</li>
                <li>Regular Decision: January 15</li>
                <li>Transfer Students: March 1</li>
              </ul>
            </div>
          </div>
          <div className="bg-college-light p-8 rounded-xl animate-fade-up">
            <h3 className="text-2xl font-semibold text-college-primary mb-6">
              Start Your Application
            </h3>
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
        </div>
      </div>
    </div>
  );
};

export default Admission;