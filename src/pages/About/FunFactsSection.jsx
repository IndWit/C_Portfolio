import React from 'react';
import ChipView from '../../components/ui/ChipView';

const FunFactsSection = () => {
  const funFacts = [
    'I like winter more than summer',
    'I often bike with my friends',
    'I like pizza and pasta',
    'I was in Egypt, Poland and Turkey',
    'My favorite movie is The Green Mile',
    'I am still in school',
    'I do not have any siblings'
  ];

  return (
    <section className="w-full bg-[#1c2421] py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1194px] mx-auto px-4 lg:px-0 lg:ml-[171px]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
          {/* Left Side - Decorative Image */}
          <div className="w-full lg:w-auto order-2 lg:order-1">
            <img 
              src="/images/img_rectangle_25_154x78_2.png" 
              alt="Decorative element"
              className="w-16 sm:w-20 h-32 sm:h-40 object-cover mx-auto lg:mx-0"
            />
          </div>

          {/* Center Content */}
          <div className="w-full lg:flex-1 order-1 lg:order-2">
            {/* Section Header */}
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#c778dd] font-['Fira_Code']">#</span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-white font-['Fira_Code']">my-fun-facts</h2>
            </div>

            {/* Fun Facts Chips */}
            <div className="mb-8 sm:mb-12">
              <ChipView 
                items={funFacts}
                variant="default"
                size="medium"
                className="gap-3 sm:gap-4"
                onItemClick={() => {}} // Add this required prop
              />
            </div>

            {/* Right Side Content */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
              {/* Decorative Dots Grid */}
              <div className="hidden sm:block">
                <div className="grid grid-cols-4 gap-4">
                  {Array.from({ length: 16 })?.map((_, index) => (
                    <div 
                      key={index}
                      className="w-1 h-1 bg-[#abb2bf] rounded-sm"
                    />
                  ))}
                </div>
              </div>

              {/* Logo */}
              <div className="flex-shrink-0">
                <img 
                  src="/images/img_logo.svg" 
                  alt="Elias Logo"
                  className="w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Decorative Dots */}
          <div className="hidden lg:block order-3">
            <div className="grid grid-cols-5 gap-5">
              {Array.from({ length: 25 })?.map((_, index) => (
                <div 
                  key={index}
                  className="w-1 h-1 bg-[#abb2bf] rounded-sm"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;