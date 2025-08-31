import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "./Socials";
import Form from "./Form";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Contact = () => {
  return (
    <section className="pt-16 xL:p-32" id="contact">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div
          className="w-full xl:[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px]
        border-t-4 border-[#ffca3b]"
        >
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* info */}
            <div
              className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r
            xl:border-border/40 h-[640px]"
            >
              <h4 className="text-[26px] font-primary font-bold mb-6">
                Contact Us
              </h4>
              <p className="mb-9">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
                sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Non, nesciunt?
              </p>
              {/* contact items */}
              <div className="flex flex-col gap-[40px] mb-16">
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiChat1Line className="text-[28px] text-[#ffca3b]" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Chat to us
                    </h5>
                    <p className="mb-4">Our friendly team is here to help.</p>
                    <p className="font-semibold text-[#121315]">
                      hi@urbanbuild.com
                    </p>
                  </div>
                </div>

                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiMapPin2Line className="text-[28px] text-[#ffca3b]" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Office
                    </h5>
                    <p className="mb-4">Come and say hello at our office.</p>
                    <p className="font-semibold text-[#121315]">
                      12350 Brickson Ave, California, LA 75201, USA
                    </p>
                  </div>
                </div>

                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-[#ffca3b]" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Phone
                    </h5>
                    <p className="mb-4">Mon-Fri from 8am to 5pm</p>
                    <p className="font-semibold text-[#121315]">
                      +1 (816) 000-0000
                    </p>
                  </div>
                </div>
              </div>
              <Socials
                containerStyles="flex gap-[40px]"
                iconStyles="text-[#121315] text-[20px]"
              />
            </div>
            {/* form */}
            <div className="flex-1">
              <h2 className="text-[36px] xl:text-[46px] xl:leading-[56px] capitalize font-bold leading-[1.3] mb-3">
                Request A Quote
              </h2>
              <p className="mb-9">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis eligendi saepe maxime nobis voluptatibus nisi est,
                nemo ratione nam
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
