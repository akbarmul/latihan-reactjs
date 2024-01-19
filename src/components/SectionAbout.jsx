import React from "react";

import imageSecHero from "../assets/hero-illustration.png";

export default function SectionAbout() {
  return (
    <>
      <main>
        <section className="container mb-28">
          <h1 className="my-10 font-bold text-3xl sm:text-5xl text-center">About Us</h1>
          <div className="flex sm:flex-row flex-col">
            <div className="sm:w-1/2 w-full order-2 sm:order-1">
              <p className="mb-7 text-xl">At this company, we're committed to delivering the best in product/service. With a focus on innovation and dedication, we have a vision for making a positive impact.</p>
              <p className="text-xl mb-2">Our Mission:</p>
              <ul className="gap-2 flex flex-col text-xl">
                <li> • Best Quality: We always strive for top-notch quality</li>
                <li> • Innovation: We're constantly seeking new ways to improve.</li>
                <li> • Expert Team: Our team is skilled and dedicated.</li>
                <li> • Your Community: We listen to our customers.</li>
              </ul>
            </div>
            <div className="sm:w-1/2 w-full my-6 sm:my-0 order-1 sm:order-2">
              <img src={imageSecHero} alt="hero" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
