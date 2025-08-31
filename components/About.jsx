import Image from "next/image";
import Pretitle from "./Pretitle";
import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const About = () => {
  return (
    <div className="pt-16 xl:pt-32" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-[540px]"
            >
              {/* pre title */}
              <Pretitle text="About us" />
              <h2 className="text-[36px] xl:text-[46px] xl:leading-[56px] capitalize font-bold leading-[1.3]">
                Focused On Excellence In Every Project
              </h2>
              <p className="mb-11">
                Our unweavering commitment to excellence drives every project we
                undertake. From concept to completion, we meticulously craft
                solutions that embody quality, precision and innovation.
              </p>
              <div className="w-max flex flex-col text-right mb-10">
                <Image
                  src="/assets/img/signature.svg"
                  width={154}
                  height={38}
                  alt="ceo-signature"
                />
                <p>Company CEO</p>
              </div>
              {/* button */}
              <Button text="Contact us" />
            </motion.div>
          </div>
          {/* img */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="flex-1 xl:flex xl:justify-center"
          >
            <div className="xl:w-[444px] xl:h-[493px] relative">
              {/* bg */}
              <div
                className="hidden xl:flex w-[444px] h-[493px] bg-[#ffca3b]
              absolute -top-4 -left-4 -z-10"
              ></div>
              <Image
                src="/assets/img/about-img.jpg"
                width={444}
                height={493}
                alt="about-image"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
