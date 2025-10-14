import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "ChertNodes",
      description: "Minecraft servers hosting",
      image: "/images/img_rectangle_22.png",
      technologies: ["HTML", "SCSS", "Python", "Flask"],
      buttons: [
        { text: "Live <~>", type: "primary" },
        { text: "Cached >=", type: "secondary" }
      ]
    },
    {
      id: 2,
      title: "ProtectX",
      description: "Discord anti-crash bot",
      image: "/images/img_rectangle_22_200x330.png",
      technologies: ["React", "Express", "Discord.js", "Node.js", "HTML", "SCSS", "Python", "Flask"],
      buttons: [
        { text: "Live <~>", type: "primary" }
      ]
    },
    {
      id: 3,
      title: "Kahoot Answers Viewer",
      description: "Get answers to your kahoot quiz",
      image: "/images/img_rectangle_22_1.png",
      technologies: ["CSS", "Express", "Node.js"],
      buttons: [
        { text: "Live <~>", type: "primary" }
      ]
    }
  ];

  return (
    <section className="w-full bg-[#1c2421] py-8 lg:py-16">
      <div className="w-full max-w-[1366px] mx-auto px-4">
        {/* Decorative Element */}
        <div className="w-5 h-5 mb-16 hidden lg:block">
          <img src="/images/img_frame_28.svg" className="w-full h-full" alt="Frame" />
        </div>

        <div className="w-full max-w-[1292px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0 mb-12">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <span className="text-[#c778dd] text-[24px] sm:text-[28px] lg:text-[32px] font-medium font-['Fira_Code']">#</span>
                <span className="text-white text-[24px] sm:text-[28px] lg:text-[32px] font-medium font-['Fira_Code']">projects</span>
              </div>
              <div className="hidden lg:block w-[255px] sm:w-[400px] lg:w-[510px] h-[1px] bg-[#c778dd]"></div>
            </div>
            <span className="text-white text-base font-medium font-['Fira_Code'] whitespace-nowrap">View all ~~&gt;</span>
          </div>

          {/* Projects Grid */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 overflow-x-auto lg:overflow-x-visible">
            {projects?.map((project) => (
              <div key={project?.id} className="border border-[#abb2bf] bg-[#1c2421] flex-shrink-0 w-full sm:w-[330px] lg:w-[330px]">
                {/* Project Image */}
                <img src={project?.image} className="w-full h-[200px] object-cover" alt={project?.title} />
                
                {/* Technologies */}
                <div className="p-2 flex flex-wrap gap-2">
                  {project?.technologies?.slice(0, 4)?.map((tech, index) => (
                    <span key={index} className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Additional Technologies Row (if exists) */}
                {project?.technologies?.length > 4 && (
                  <div className="px-2 pb-2 flex flex-wrap gap-2">
                    {project?.technologies?.slice(4)?.map((tech, index) => (
                      <span key={index} className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Project Info */}
                <div className="border-t border-[#abb2bf] p-4">
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-white text-[20px] sm:text-[24px] font-medium font-['Fira_Code'] mb-2">
                        {project?.title}
                      </h3>
                      <p className="text-[#abb2bf] text-base font-normal font-['Fira_Code']">
                        {project?.description}
                      </p>
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex gap-4">
                      {project?.buttons?.map((button, index) => (
                        <button
                          key={index}
                          className={`px-4 py-2 text-base font-medium font-['Fira_Code'] border transition-colors ${
                            button?.type === 'primary' ?'border-[#c778dd] text-white hover:bg-[#c778dd] hover:bg-opacity-10' :'border-[#abb2bf] text-[#abb2bf] hover:bg-[#abb2bf] hover:bg-opacity-10'
                          }`}
                        >
                          {button?.text}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Element */}
          <div className="flex justify-end mt-16">
            <img src="/images/img_rectangle_25_154x68.png" className="w-[34px] sm:w-[50px] lg:w-[68px] h-auto" alt="Decoration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;