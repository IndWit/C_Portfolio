import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ContactInfo from './ContactInfo';
import SocialMedia from './SocialMedia';

const ContactsPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Elias - Web Designer & Front-End Developer | Professional Portfolio</title>
        <meta 
          name="description" 
          content="Get in touch with Elias, experienced web designer and front-end developer. Available for freelance opportunities, custom web development, UI/UX design, and digital solutions. Contact via email, Discord, or social media." 
        />
        <meta property="og:title" content="Contact Elias - Web Designer & Front-End Developer | Professional Portfolio" />
        <meta property="og:description" content="Get in touch with Elias, experienced web designer and front-end developer. Available for freelance opportunities, custom web development, UI/UX design, and digital solutions." />
      </Helmet>
      <div className="min-h-screen bg-background-main flex flex-col">
        {/* Left Sidebar - Decorative Elements */}
        <div className="hidden lg:block fixed left-0 top-0 h-full w-[170px] bg-background-main">
          <div className="flex flex-col gap-[90px] pt-0 pl-4">
            {/* Vertical Line and Social Icons */}
            <div className="flex flex-col items-center gap-2 mt-0 ml-4">
              <div className="w-[1px] h-[190px] bg-line-background"></div>
              <div className="flex flex-col items-center gap-2 mt-2">
                <img src="/images/img_github.svg" alt="GitHub" className="w-[32px] h-[32px] cursor-pointer hover:opacity-80 transition-opacity" />
                <img src="/images/img_dribble.svg" alt="Dribbble" className="w-[32px] h-[32px] cursor-pointer hover:opacity-80 transition-opacity" />
                <img src="/images/img_figma.svg" alt="Figma" className="w-[32px] h-[32px] cursor-pointer hover:opacity-80 transition-opacity" />
              </div>
            </div>

            {/* Decorative Dots Pattern */}
            <div className="flex flex-col gap-[10px] mr-[92px]">
              {[...Array(5)]?.map((_, rowIndex) => (
                <div key={rowIndex} className="flex gap-[22px] overflow-x-auto">
                  {[...Array(5)]?.map((_, colIndex) => (
                    <div 
                      key={colIndex} 
                      className="w-[4px] h-[4px] bg-line-background rounded-sm flex-shrink-0"
                      style={{ marginLeft: colIndex === 0 ? '-31px' : '0' }}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-[170px]">
          <Header />
          
          <main className="flex flex-col gap-[52px] px-4 sm:px-6 lg:px-0 mt-[52px]">
            {/* Page Title and Description */}
            <section className="flex flex-col lg:flex-row gap-8 lg:gap-0 w-full max-w-[1194px] mx-auto">
              <div className="flex flex-col w-full lg:w-[46%]">
                {/* Title */}
                <div className="flex items-center gap-0 mb-4">
                  <span className="text-xl font-semibold leading-xl text-text-secondary">/</span>
                  <span className="text-xl font-semibold leading-xl text-text-accent">contacts</span>
                </div>

                {/* Subtitle */}
                <h2 className="text-base font-normal leading-sm text-text-accent mt-[14px] mb-[46px]">
                  Who am i?
                </h2>

                {/* Description */}
                <p className="text-base font-medium leading-md text-text-primary w-full lg:w-[90%] mb-[88px]">
                  I am interested in freelance opportunities. However, if you have other request or question, do not hesitate to contact me
                </p>

                {/* Social Media Section */}
                <SocialMedia />
              </div>

              {/* Contact Cards Section */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 w-full lg:flex-1 lg:justify-end lg:items-start lg:mb-[88px]">
                <ContactInfo />
                
                {/* Decorative Image */}
                <div className="hidden lg:block lg:self-end lg:ml-4">
                  <img 
                    src="/images/img_rectangle_25.png" 
                    alt="Decorative element" 
                    className="w-[68px] h-[154px] mt-[18px]"
                  />
                </div>
              </div>
            </section>
          </main>
        </div>

        {/* Right Sidebar - Decorative Elements */}
        <div className="hidden lg:block fixed right-0 bottom-0 w-[53px] h-[288px]">
          <div className="flex flex-col gap-5 items-end pt-[185px] pr-4">
            {[...Array(5)]?.map((_, rowIndex) => (
              <div key={rowIndex} className="flex gap-5 justify-end overflow-x-auto">
                {[...Array(5)]?.map((_, colIndex) => (
                  <div 
                    key={colIndex} 
                    className="w-[4px] h-[4px] bg-line-background rounded-sm flex-shrink-0"
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ContactsPage;