import React from "react";

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

      <div className="grid grid-cols-5 py-5">
        <div className="text-xl font-semibold">Contact Us:</div>
        <div>
          <p className="pb-2 pt-1">USA Office</p>
          <p className="text-sm">
            1207 Godrej Waterside, Tower II 12th Floor, Block DP Sector V Salt
            Lake,Electronic Complex, Kolkata West Bengal 700091
          </p>

          <a>7001805711</a>
          <a>contact@atfworld.com</a>
        </div>
        <div></div>
        <div className="col-span-2">
          <p className="text-xl font-semibold">Follow Us</p>
          {/* icons  */}
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
