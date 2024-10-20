import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to the Screen Blogs
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore a variety of posts, thoughts, and discussions that dive into
          different topics. From tech trends to creative ideas, there's always
          something interesting to discover.
        </p>
        <div className="space-y-6">
          {/* Example blog entries */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Exploring the Future of AI
            </h3>
            <p className="text-gray-600">
              A dive into how artificial intelligence is transforming industries
              and our daily lives.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Creative Projects for Beginners
            </h3>
            <p className="text-gray-600">
              Easy and fun projects to kickstart your creative journey, no prior
              experience needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
