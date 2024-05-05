import React from "react";
import Image from "next/image";
import backgroundImage from "../images/bg.png";
import styles from "../styles/main.module.css";

export default function Main() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat">
      <Image src={backgroundImage} layout="fill" objectFit="cover" />

      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div
        className={`${styles.heroLightContent} relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8`}
      >
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className={`${styles.ForefrontText}`}>
            We are at the <br /> <span className="10">forefront of AI</span>
          </h1>

          <p className={`font-medium ${styles.SubHeadingText}`}>
            From Conserving Wildlife to Automatically <br />
            Generating Caricatures–{" "}
            <span className="font-bold">We Do It All</span>
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="mt-8 inline-block rounded bg-black border border-black text-white px-8 py-3 text-base font-medium transition hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
