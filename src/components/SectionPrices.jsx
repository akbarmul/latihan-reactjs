import React from "react";
import CardPrices from "./CardPrices";

import Circle from "../assets/check-circle.svg";
import ButtonPrices from "./ButtonPrices";

export default function SectionPrices() {
  return (
    <>
      <main>
        <section className="py-10">
          <div className="container">
            <h1 className="sm:text-5xl text-3xl text-center font-bold">Lets Start Together</h1>
            <div className="grid sm:grid-cols-2 sm:mx-10 mx-0 md:mx-20 lg:mx-25 xl:mx-40 py-14 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1">
              <CardPrices>
                <h3 className="text-3xl font-bold text-green-700">
                  $19<span className="text-lg text-gray-500">/month</span>
                </h3>
                <h3 className="text-2xl font-bold text-green-700 mt-5">Starter</h3>
                <p className="text-gray-600 mt-2">Unleash the power of automation.</p>
                <ul className="gap-2 flex flex-col mt-3 mb-2">
                  <li className="flex">
                    <img src={Circle} alt="circle" />
                    <p className="m-o ml-2">Multi-step Zap</p>
                  </li>
                  <li className="flex">
                    <img src={Circle} alt="circle" />
                    <p className="m-o ml-2">3 Premium Apps</p>
                  </li>
                  <li className="flex">
                    <img src={Circle} alt="circle" />
                    <p className="m-o ml-2">2 Users Team</p>
                  </li>
                </ul>
                <ButtonPrices />
              </CardPrices>
              <CardPrices>
                <h3 className="text-3xl font-bold text-green-700">
                  $54<span className="text-lg text-gray-500">/month</span>
                </h3>
                <h3 className="text-2xl font-bold text-green-700 mt-5">Professional</h3>
                <p className="text-gray-600 mt-2">Automation tools to take your work to the next level.</p>
                <ul className="gap-2 flex flex-col mt-3 mb-2">
                  <li className="flex">
                    <img src={Circle} alt="circle" />
                    <p className="m-o ml-2">Multi-step Zap</p>
                  </li>
                  <li className="flex">
                    <img src={Circle} alt="circle" />
                    <p className="m-o ml-2">Unlimited Premium </p>
                  </li>
                  <li className="flex">
                    <img src={Circle} alt="circle" />
                    <p className="m-o ml-2">50 Users team</p>
                  </li>
                  <li className="flex">
                    <img src={Circle} alt="circle" />
                    <p className="m-o ml-2">Shared Workspace</p>
                  </li>
                </ul>
                <ButtonPrices />
              </CardPrices>
              <CardPrices>
                <h3 className="text-3xl font-bold text-green-700">
                  <span className="text-white bg-green-500 rounded-full text-xs px-5 py-1 absolute top-4 right-4">MOST POPULAR</span>
                  $89<span className="text-lg text-gray-500">/month</span>
                </h3>
                <h3 className="text-2xl font-bold text-green-700 mt-5">Company</h3>
                <p className="text-gray-600 mt-2">Automation plus enterprise-grade features.</p>
                <ul className="gap-2 flex flex-col mt-3 mb-2">
                  <li className="flex">
                    <img src={Circle} alt="circle" />
                    <p className="m-o ml-2">Unlimited Premium</p>
                  </li>
                  <li className="flex">
                    <img src={Circle} alt="circle" />
                    <p className="m-o ml-2">3 Premium Apps</p>
                  </li>
                  <li className="flex">
                    <img src={Circle} alt="circle" />
                    <p className="m-o ml-2">Unlimited user Team</p>
                  </li>
                  <li className="flex">
                    <img src={Circle} alt="circle" />
                    <p className="m-o ml-2">Advanced Admin</p>
                  </li>
                  <li className="flex">
                    <img src={Circle} alt="circle" />
                    <p className="m-o ml-2">Custom Data Retention</p>
                  </li>
                </ul>
                <ButtonPrices />
              </CardPrices>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
