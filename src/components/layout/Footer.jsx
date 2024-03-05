import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center py-10 px-2 sm:px-4 md:px-8 lg:px-16 bg-[#DCDCDC] min-h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 lg:gap-20">
          <div>
            <p className="text22 pb-6 semibold ">Leadovate</p>
            <p>
              Leadovate in mentorship embodies the idea of mentors taking the
              lead in empowering their mentees to innovate, grow, and achieve
              their goals
            </p>
          </div>
          <div className="flex justify-center items-center flex-col lg:justify-start lg:items-start">
            <p className="text22 pb-6 semibold ">Get In Touch</p>
            <div className="flex gap-3">
              <FaLinkedinIn size={20} className="hover:text-[#0077B5]" />
              <p>LinkedIn</p>
            </div>
            <div className="flex gap-3 py-4">
              <FaTwitter size={20} className="hover:text-[#1DA1F2]" />
              <p>Twitter</p>
            </div>
            <div className="flex gap-3">
              <FaTelegramPlane size={20} className="hover:text-[#0088cc]" />
              <p>Telegram</p>
            </div>
          </div>
          <div>
            <p className="text22 pb-6 semibold ">Insider Insights</p>
            <p>
              Gain expert mentorship insights on guiding at the forefront of
              innovation
            </p>
            <div className="flex min-h-[44px] mt-6">
              <input
                type="email"
                className="rounded-l-xl pl-2 placeholder:pl-2 border-none outline-none focus:outline-none"
              />
              <div className="rounded-r-xl bg-[#008A90] min-w-[30px] min-h-[40px] flex justify-center items-center px-4">
                <FaArrowRightLong size={20} className="font-thin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
