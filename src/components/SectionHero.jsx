import React from "react";

// import image
import imageSecHero from "../assets/hero-illustration.png";

import imageSecPartner1 from "../assets/varta.png";
import imageSecPartner2 from "../assets/lenovo.png";
import imageSecPartner3 from "../assets/bbs.png";
import imageSecPartner4 from "../assets/weller.png";
import imageSecPartner5 from "../assets/british_airways.png";
import imageSecPartner6 from "../assets/lufthansa.png";
// import button
import ButtonArrow from "./ButtonArrow";

export default function SectionHero() {
  return (
    <>
      <main>
        {/* hero section */}
        <section className="container flex py-10 gap-5 lg:flex-row flex-col">
          <div className="w-full lg:order-1 order-2">
            <h1 class="text-5xl font-bold mb-9">Landing page for your online service</h1>
            <p class="text-gray-600 mb-10">Sed ea enim et expedita quo. Sint consequuntur nobis expedita moll itia voluptatem aut est a quia.</p>
            <ButtonArrow>
              Learn More
              <span class="iconify mt-1" data-icon="ep:right"></span>
            </ButtonArrow>
          </div>
          <div className="w-full lg:order-2 order-1">
            <img src={imageSecHero} alt="hero-illustartion" />
          </div>
        </section>
        {/* partner section */}
        <section className="container grid items-center lg:grid-cols-6 grid-cols-3 gap-4 my-6">
          <img className="w-full" src={imageSecPartner1} alt="partner" />
          <img className="w-full" src={imageSecPartner2} alt="partner" />
          <img className="w-full" src={imageSecPartner3} alt="partner" />
          <img className="w-full" src={imageSecPartner4} alt="partner" />
          <img className="w-full" src={imageSecPartner5} alt="partner" />
          <img className="w-full" src={imageSecPartner6} alt="partner" />
        </section>
      </main>
    </>
  );
}
