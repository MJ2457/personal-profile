import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const contactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-12">
      <img
        src="../images/email-image.png"
        alt="Contact Me"
        className="max-w-[200px] md:max-w-[250px] lg:max-w-[300px] w-full"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default contactMeRight;
