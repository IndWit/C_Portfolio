import React from 'react';

const AboutSection = () => {
  return (
    <section className="w-full bg-[#1c2421]">
      <div className="w-full max-w-[1194px] mx-auto px-4 lg:px-0 lg:ml-[171px]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 py-8 sm:py-12 lg:py-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <p className="text-sm sm:text-base leading-6 sm:leading-7 text-[#abb2bf] font-normal font-['Fira_Code']">
              Hello, I am Elias!
              <br /><br />
              I am a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
              <br /><br />
              Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
            </p>
          </div>

          {/* Image and Decorative Elements */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative w-full max-w-[342px] mx-auto">
              {/* Main Image */}
              <img 
                src="/images/img_image_506x338.png" 
                alt="Elias - Front-end Developer"
                className="w-full h-auto rounded-lg"
              />
              
              {/* Decorative Dots - Left Side */}
              <div className="absolute -left-4 top-12 hidden sm:block">
                <div className="grid grid-cols-5 gap-4">
                  {Array.from({ length: 25 })?.map((_, index) => (
                    <div 
                      key={index}
                      className="w-1 h-1 bg-[#abb2bf] rounded-sm"
                    />
                  ))}
                </div>
              </div>

              {/* Decorative Dots - Bottom Right */}
              <div className="absolute -bottom-16 -right-4 hidden sm:block">
                <div className="grid grid-cols-5 gap-3">
                  {Array.from({ length: 20 })?.map((_, index) => (
                    <div 
                      key={index}
                      className="w-1 h-1 bg-[#abb2bf] rounded-sm"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;