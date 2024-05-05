import React from "react";
import styles from "../styles/main.module.css";
import Image from "next/image";
import AboutUsImg from "../images/aboutUsImg.png";

const AboutUs = () => {
  return (
    <section className="bg-white">
      <div className="relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 text-center">
        <h1 className={`${styles.AboutUsHeading} relative mb-8`}>
          About Us
          <div
            className="absolute left-1/2 w-40 h-1 bg-gradient-to-r from-blue-600 via-transparent to-transparent transform -translate-x-1/2"
            style={{ top: "90%", zIndex: 1 }}
          ></div>
        </h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 bg-blue-100">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                maxWidth: "70%",
                borderRadius: "10%",
              }}
            >
              <Image
                src={AboutUsImg}
                layout="intrinsic"
                width={500}
                height={500}
                objectFit="cover"
                style={{ borderRadius: "10%", border: "solid thick white" }}
              />
            </div>
          </div>
          <div className="lg:py-24 flex flex-col justify-center text-left">
            <h2
              className="text-3xl font-bold sm:text-4xl mx-0"
              style={{ marginLeft: "30px" }}
            >
              Welcome To LENS
            </h2>
            <p
              className="mt-4 text-gray-600 leading-6 break-words "
              style={{ marginLeft: "30px" }}
            >
              We put our hearts, souls, and sweat into designing and developing
              custom AI-powered solutions for your business so you don’t have
              to.
            </p>
            <a
              href="#"
              className="mt-8 inline-block rounded bg-blue border border-black px-8 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
              style={{ marginLeft: "30px", width:"25%"}}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
