import React from 'react';
import Card from '../../components/ui/Card';

const ContactInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:gap-[10px]">
      {/* Support Card */}
      <Card className="flex flex-col gap-2 w-full lg:w-auto" padding="medium">
        <h3 className="text-base font-medium leading-sm text-[var(--text-primary)] font-['Fira_Code']">
          Support me here
        </h3>
        <p className="text-base font-normal leading-sm text-[var(--text-secondary)] font-['Fira_Code']">
          4149500120690030
        </p>
      </Card>

      {/* Message Card */}
      <Card className="flex flex-col gap-4 w-full lg:flex-1" padding="medium">
        <h3 className="text-base font-semibold leading-sm text-[var(--text-primary)] font-['Fira_Code']">
          Message me here
        </h3>
        <div className="flex flex-col gap-2">
          {/* Discord */}
          <div className="flex items-center gap-1">
            <img 
              src="/images/img_discord.svg" 
              alt="Discord" 
              className="w-[32px] h-[32px]"
            />
            <span className="text-base font-normal leading-sm text-[var(--text-secondary)] ml-1 font-['Fira_Code']">
              Elias#1234
            </span>
          </div>
          
          {/* Email */}
          <div className="flex items-center gap-1">
            <img 
              src="/images/img_email.svg" 
              alt="Email" 
              className="w-[32px] h-[32px]"
            />
            <span className="text-base font-normal leading-sm text-[var(--text-secondary)] font-['Fira_Code']">
              elias@elias-dev.ml
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContactInfo;
