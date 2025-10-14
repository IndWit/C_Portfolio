import React from 'react';
import Card from '../../components/ui/Card';

const ContactInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:gap-[10px] px-4 sm:px-8 lg:px-14">
      {/* Support Card */}
      <Card className="flex flex-col gap-2 w-full lg:w-auto" padding="medium">
        <h3 className="text-base font-medium leading-sm text-text-accent">
          Support me here
        </h3>
        <p className="text-base font-normal leading-sm text-text-primary">
          4149500120690030
        </p>
      </Card>

      {/* Message Card */}
      <Card className="flex flex-col gap-4 w-full lg:flex-1" padding="medium">
        <h3 className="text-base font-semibold leading-sm text-text-accent">
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
            <span className="text-base font-normal leading-sm text-text-primary ml-1">
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
            <span className="text-base font-normal leading-sm text-text-primary">
              elias@elias-dev.ml
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContactInfo;