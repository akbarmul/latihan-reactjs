import React from "react";
import ButtonContact from "./ButtonContact";

export default function SectionContact() {
  return (
    <>
      <main>
        <section className="container my-14">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/2 w-full">
              <h1 className="font-bold sm:text-5xl text-3xl mb-5">Let's Talk</h1>
              <p className="text-xl mb-10 text-balance">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help</p>
              <h3 className="font-semibold mb-2 text-xl">Email</h3>
              <p className="text-lg mb-10">beebs@gmail.com</p>
              <h3 className="font-semibold text-xl mb-3">Socials</h3>
              <ul className="text-lg underline">
                <li className="mb-2">
                  <a href="#">Instagram</a>
                </li>
                <li className="mb-2">
                  <a href="#">Twitter</a>
                </li>
                <li className="mb-2">
                  <a href="#">Facebook</a>
                </li>
              </ul>
            </div>
            <div className="sm:w-1/2 w-full">
              <form>
                <div className="mb-3">
                  <label className="block mb-2 text-lg" htmlFor="email">
                    Email
                  </label>
                  <input className="w-full bg-slate-100 rounded-lg py-2" type="email" name="email" id="email" />
                </div>
                <div className="mb-3">
                  <label className="block mb-2 text-lg" htmlFor="type">
                    What service are you interested in
                  </label>
                  <select defaultValue={"sel"} className="w-full bg-slate-100 rounded-lg py-2" name="type" id="type">
                    <option value="sel" disabled>
                      Select Project Type
                    </option>
                    <option value="web">Website</option>
                    <option value="app">Application</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="block mb-2 text-lg" htmlFor="mesage">
                    Message
                  </label>
                  <textarea className="w-full bg-slate-100 rounded-lg py-2 resize-none" name="mesage" id="mesage" rows="10"></textarea>
                </div>
                <ButtonContact />
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
