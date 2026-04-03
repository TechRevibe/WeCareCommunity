import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo/icon_we_care_community.png";
import ndislogo from "../../assets/logo/ndis_logo.png";

const Footer = () => {
  const socialLinks = [
    { Icon: FaFacebookF, href: "https://facebook.com/yourpage" },
    { Icon: FaXTwitter, href: "https://twitter.com/yourhandle" },
    { Icon: FaYoutube, href: "https://youtube.com/yourchannel" },
    { Icon: FaLinkedinIn, href: "https://linkedin.com/company/yourprofile" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Referral Form", path: "/referralform" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-white font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Office Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-800 w-fit pr-4 pb-1">
              Office
            </h3>
            <div className="text-gray-600 text-lg leading-relaxed space-y-2">
              <div>
                <span className="font-semibold text-gray-800 block">Head Office:</span>
                Level 1, 154 Marsden St, Parramatta NSW 2150
              </div>
              <div>
                <span className="font-semibold text-gray-800 block">Branch Office:</span>
                168 Harrow Rd Glenfield,NSW 2167
              </div>
              <div>
                <span className="font-semibold text-gray-800 block">Goulbourn Day Program:</span>
                149 Kinghorne St, Goulbourn, NSW 2580
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-800 w-fit pr-4 pb-1">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-gray-600 text-lg hover:text-blue-800 hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-800 w-fit pr-4 pb-1">
              Contact Us
            </h3>
            <div className="text-gray-600 text-lg space-y-2">
              <p>
                <a
                  href="mailto:info@wecarecommunity.com.au?subject=Enquiry%20from%20Website"
                  className="hover:text-blue-800 transition-colors"
                >
                  info@wecarecommunity.com.au
                </a>
              </p>
              <p>
                <a
                  href="tel:1800371070"
                  className="hover:text-blue-800 transition-colors"
                >
                  1800 371 070
                </a>
              </p>
            </div>
            {/* Other Services Area moved below Contact */}
            <div className="mt-4">
              <span className="font-semibold text-gray-800 block">Other Services Area:</span>
              <p className="text-gray-600 text-lg leading-relaxed">
                All Across Sydney, Southern Highlands, Newcastle, Hawkesbury, Richmond, and Wollongong
              </p>
            </div>
          </div>

          {/* Logos */}
          <div className="flex flex-row gap-4 items-start justify-start">
            <div className="w-32 h-32 flex items-center justify-center">
              <img
                src={logo}
                alt="We Care Community Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="w-32 h-32 flex items-center justify-center">
              <img
                src={ndislogo}
                alt="NDIS Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} We Care Community. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;