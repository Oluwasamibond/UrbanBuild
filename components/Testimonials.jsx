import Image from "next/image";
import Button from "./Button";
import Slider from "./Slider";
import Pretitle from "./Pretitle";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 max-w-[484px] xl:pt-[54px] mb-12 xl:mb-0"
          >
            <Pretitle text="Testimonials" />
            <h2 className="text-[36px] xl:text-[46px] xl:leading-[56px] capitalize font-bold leading-[1.3] mb-6">
              Built On Trust, Proven By Results
            </h2>
            <p className="mb-10 max-w-[420px]">
              From homes to commercial spaces, our clients share their
              experiences of working with us. See how we've helped them bring
              their dreams to live with expert craftmanship.
            </p>
            <Button text="Work with us" />
          </motion.div>
          {/* img & slider */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex flex-col xl:flex-row xl:justify-end"
          >
            <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px]">
              <Image
                src="/assets/img/img.jpg"
                fill
                className="object-cover"
                quality={100}
                alt="testimonial-img"
              />
            </div>
            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="xl:absolute xl:bottom-0 xl:right-[160px] relative max-w-max"
            >
              {/* quote icon */}
              <Image
                src="/assets/img/quote.svg"
                width={54}
                height={36}
                alt="quote-img"
                className="absolute z-20 -top-4 left-[60px]"
              />
              <Slider />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
