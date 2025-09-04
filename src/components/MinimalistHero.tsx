import React from 'react';

const MinimalistHero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Image */}
            <div className="flex-shrink-0 order-1 lg:order-2">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-gray-200">
                <img
                  src="/photo1.jpg"
                  alt="Ibrahim"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                {/* Welcome Message */}
                <div className="inline-block">
                  <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                    Welcome to my website :)
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                  Hi, I'm <span className="text-[rgb(10,93,128)]">Ibrahim</span>
                </h1>
                
                <div className="space-y-2">
                  <p className="text-xl md:text-2xl text-gray-600">
                    Research Associate | AI & Robotics
                  </p>
                  <p className="text-lg md:text-xl text-gray-500">
                    Current Affiliation: Carnegie Mellon University
                  </p>
                </div>

                <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  <i>Passionate about creating intelligent and autonomous systems that bridge technology and humanity.</i>
                </p>
              </div>

              {/* Contact Links */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                <a
                  href="Ibrahim_Jimoh_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(10,93,128)] hover:text-blue-700 font-medium underline underline-offset-4 transition-colors"
                >
                  Peek my CV
                </a>

                <span className="text-gray-600 font-medium">
                  Email: ibjhmoh[at]gmail[dot]com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalistHero;