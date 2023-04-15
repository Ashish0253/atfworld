import React from "react";
import { BsInstagram } from "react-icons/bs";
import {
  FiTwitter,
  FiLinkedin,
  FiYoutube,
  FiFacebook,
  FiPhoneCall,
  FiMail,
} from "react-icons/fi";

const Contact = () => {
  return (
    <div className="bg-primary px-[15%] py-10 text-white">
      <div>
        <div className=" text-[40px] border-b-2 border-white py-2">
          WHERE TO FIND US
        </div>
        <p className="pl-[50%] py-4">
          ATF is USA based company. We have office in Dallas, TX and we have
          extended offices in India, Bangladesh and Philippines.
        </p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1757.5987047354115!2d88.43718688372236!3d22.573539433831737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a853cdccab%3A0xcfb44f8df9663266!2sGodrej%20Waterside%20-%20Tower%202%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1681555283502!5m2!1sen!2sin"
        width="600"
        height="450"
        // style="border:0;"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-[100%]"
      ></iframe>

      <div className="grid grid-cols-5 py-5">
        <div className="text-xl font-semibold">Contact Us:</div>
        <div>
          <p className="pb-2 pt-1 font-bold">USA Office</p>
          <p className="text-sm">
            1207 Godrej Waterside, Tower II 12th Floor, Block DP Sector V Salt
            Lake,Electronic Complex, Kolkata West Bengal 700091
          </p>

          <a className="flex font-number">
            <FiPhoneCall size={15} className="m-1 mx-2" />
            7001805711
          </a>
          <a className="flex">
            <FiMail size={15} className="m-2" />
            contact@atfworld.com
          </a>
        </div>
        <div></div>
        <div className="col-span-2 ">
          <p className="text-xl font-semibold px-2 flex justify-center pr-10">
            Follow Us
          </p>
          {/* icons  */}

          <div className="p-2 flex justify-end gap-4">
            <FiYoutube size={45} />
            <BsInstagram size={40} />
            <FiTwitter size={40} />
            <FiLinkedin size={40} />
            <FiFacebook size={40} />
          </div>

          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
