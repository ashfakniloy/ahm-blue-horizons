import React from "react";
import ContactForm from "./ContactForm";
import { MdPhoneInTalk, MdEmail, MdLocationPin } from "react-icons/md";

// const contactData = [
//   {
//     label: 'Our Office',
//     contact: 'The Florida Castle (3rd Floor), Suite-C1, House-07, Road-23/A, Gulshan-1, Dhaka-1212',
//   },
//   {
//     label: 'Contact Numbers',
//     contact: ''
//   }
// ]

function Contact() {
  return (
    <div id="contact" className="py-10 lg:py-[100px] bg-gray-100">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl lg:text-[40px] font-bold  text-custom-blue4">
            Contact Us
          </h1>
          <p className="mt-2 lg:mt-5 lg:w-[620px] text-custom-gray text-base lg:text-lg">
            Got questions or ready to plan? Reach out to our team for
            personalized assistance. We&apos;re here to guide you, listen to
            your feedback, and help you embark on your next adventure.
          </p>
        </div>

        <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row gap-20 lg:items-center">
          <div className="space-y-5">
            <div className="flex items-center gap-5">
              <span className="p-3 text-3xl rounded-full bg-cyan-400 text-slate-100">
                <MdLocationPin />
              </span>
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold text-cyan-600">Our Office:</h4>
                <p className="text-gray-700">
                  The Florida Castle (3rd Floor), Suite-C1, House-07, Road-23/A,
                  Gulshan-1, Dhaka-1212
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <span className="p-3 text-3xl rounded-full bg-cyan-400 text-slate-100">
                <MdPhoneInTalk />
              </span>
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold text-cyan-600">
                  Contact Numbers:
                </h4>
                <div className="flex flex-wrap text-gray-700 t">
                  <a
                    href="tel:+8802-9848304"
                    className="hover:text-cyan-500 transition duration-300"
                  >
                    (+8802) 9848304
                  </a>
                  <span>&nbsp;|&nbsp;</span>
                  <a
                    href="tel:+8802-8831804"
                    className="hover:text-cyan-500 transition duration-300"
                  >
                    8831804
                  </a>
                  <span>&nbsp;|&nbsp;</span>
                  <a
                    href="tel:+8802-9847893"
                    className="hover:text-cyan-500 transition duration-300"
                  >
                    9847893
                  </a>
                  <span>&nbsp;|&nbsp;</span>
                  <a
                    href="tel:+8802-9842924"
                    className="hover:text-cyan-500 transition duration-300"
                  >
                    9842924
                  </a>
                  <span>-</span>
                  <a
                    href="tel:+8802-9842925"
                    className="hover:text-cyan-500 transition duration-300"
                  >
                    5
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <span className="p-3 text-3xl rounded-full bg-cyan-400 text-slate-100">
                <MdEmail />
              </span>
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold text-cyan-600">Email Us:</h4>
                <div className="text-gray-700">
                  <a
                    href="mailto:info@dnatabd.com"
                    className="hover:text-cyan-500 transition duration-300"
                  >
                    info@dnatabd.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
