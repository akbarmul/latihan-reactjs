import React from "react";

// import image
import imageSecHero from "../assets/hero-illustration.png";

import imageSecPartner1 from "../assets/varta.png";

import imageSecPartner2 from "../assets/lenovo.png";

import imageSecPartner3 from "../assets/bbs.png";

import imageSecPartner4 from "../assets/weller.png";

import imageSecPartner5 from "../assets/british_airways.png";

import imageSecPartner6 from "../assets/lufthansa.png";

import imgBlog from "../assets/illus-block.png";

import imgTest1 from "../assets/arron.png";

import imgTest2 from "../assets/murphy.png";

import imgTest3 from "../assets/lukas.png";

// import button
import ButtonArrow from "./ButtonArrow";
import CardFeatures from "./CardFeatures";
import CardTestimoni from "./CardTestimoni";

export default function SectionHero() {
  return (
    <>
      <main>
        {/* hero section */}
        <section className="container flex py-10 gap-5 lg:flex-row flex-col">
          <div className="w-full lg:order-1 order-2">
            <h1 className="sm:text-5xl text-3xl font-bold mb-9">
              Landing page for <br /> your online service
            </h1>
            <p className="text-gray-600 mb-10">Sed ea enim et expedita quo. Sint consequuntur nobis expedita moll itia voluptatem aut est a quia.</p>
            <ButtonArrow>
              Learn More
              <span className="iconify mt-1" data-icon="ep:right"></span>
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
        {/* about section */}
        <section className="container flex gap-8 lg:flex-row flex-col">
          <div className="w-full">
            <img src={imgBlog} alt="illusblog" />
          </div>
          <div className="w-full">
            <h1 className="text-5xl mb-8 text-bold">Incredible</h1>
            <p className="mb-7">
              Consequatur quidem deserunt qui fugit cumque ut esse est dignissimos. Itaque quia et veritatis. Qui voluptatem dolor quia exercitationem sed similique. Incidunt quae suscipit nihil deleniti. Possimus praesentium sunt aut
              tempora ut alias.
            </p>
            <ButtonArrow>
              Learn More<span className="iconify mt-1" data-icon="ep:right"></span>
            </ButtonArrow>
          </div>
        </section>
        {/* features sec */}
        <section className="my-10 bg-gray-200" id="feat">
          <div className="container p-20">
            <div className="w-1/3 mx-auto my-10">
              <h1 className="sm:text-4xl text-2xl font-bold text-center">Our service features</h1>
              <p className="text-center">Aliquid officiis cumque sunt sint. Et quo culpa. Enim sed natus molestiae fugiat cum consequatur quia sunt.</p>
            </div>
            <div className="grid lg:grid-cols-4 gap-5 sm:grid-cols-2 grid-cols-1">
              <CardFeatures>
                <h1 className="text-3xl font-bold mb-3">Incredible</h1>
                <p>Adipisci tempora pariatur modi recusandae. Omnis neque dolorum. Natus facere voluptatem.</p>
              </CardFeatures>
              <CardFeatures>
                <h1 className="text-3xl font-bold mb-3">Generic</h1>
                <p>Adipisci tempora pariatur modi recusandae. Omnis neque dolorum. Natus facere voluptatem.</p>
              </CardFeatures>
              <CardFeatures>
                <h1 className="text-3xl font-bold mb-3">Awesome</h1>
                <p>Adipisci tempora pariatur modi recusandae. Omnis neque dolorum. Natus facere voluptatem.</p>
              </CardFeatures>
              <CardFeatures>
                <h1 className="text-3xl font-bold mb-3">Refined</h1>
                <p>Adipisci tempora pariatur modi recusandae. Omnis neque dolorum. Natus facere voluptatem.</p>
              </CardFeatures>
            </div>
          </div>
        </section>
        {/* sec testimoni */}
        <section className="my-5">
          <div className="container py-10">
            <div className="w-1/3 mx-auto my-10">
              <h1 className="sm:text-4xl text-2xl font-bold text-center">Testimonials</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repellendus numquam.</p>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-10">
              <CardTestimoni>
                <img src={imgTest1} alt="arron" />
                <p className="mt-7">
                  Itaque est odio et rerum harum molestias aliquam. Ullam et aut velit culpa aut. Perferendis nesciunt non voluptatibus mollitia omnis. Dolorem error inventore. Cupiditate nihil modi quos rerum. Mollitia rerum ipsam facere
                  velit.
                </p>
              </CardTestimoni>
              <CardTestimoni>
                <img src={imgTest2} alt="arron" />
                <p className="mt-7">
                  Quis voluptatem nobis quibusdam. Fuga aliquid eum repudiandae aut iure omnis. Omnis facere nisi minus ut quos excepturi saepe perspiciatis et. Dolore ut nihil minima natus enim consequuntur aut qui. Ullam dicta labore
                  dolores eos.
                </p>
              </CardTestimoni>
              <CardTestimoni>
                <img src={imgTest3} alt="arron" />
                <p className="mt-7">
                  Et quibusdam voluptatem molestias cum autem autem et ut. Ad et tenetur. Autem quis id tempora accusantium quod dolores et. Possimus voluptatem hic nulla consequatur voluptates libero quia expedita. Eum aut voluptatem qui
                  praesentium vitae.
                </p>
              </CardTestimoni>
            </div>
          </div>
        </section>
        {/* sec star trial */}
        <section className="container lg:my-20 my-5">
          <div className="bg-green-700 lg:py-32 py-10">
            <div className="lg:w-1/3 w-full lg:mx-auto mx-auto lg:px-0 px-5">
              <h1 className="text-white text-3xl font-bold text-center mb-3">Start your free trial</h1>
              <p className="text-white text-center mb-10">Trial period - 14 days, no credit card required</p>
              <div className="flex lg:flex-row flex-col">
                <input className="w-full lg:py-3 py-3 lg:px-2 px-10 rounded-l-lg" type="text" placeholder="Your email address"></input>
                <button className="flex-shrink-0 transition-all rounded-r-lg py-2 px-3 bg-green-600 text-white font-bold hover:bg-green-800 active:bg-green-900 focus:ring focus:ring-green-400">Get Started</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
