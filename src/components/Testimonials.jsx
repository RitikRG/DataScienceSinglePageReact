import React from "react";
import { FaDatabase, FaAccusoft } from "react-icons/fa";

const testimonialStyles = {
  container: `max-w-[1000px] mx-auto py-6 px-3 grid space-y-6 md:space-y-0 md:grid-cols-2 md:space-x-6 `,
  accusofttestimonial: `p-10 text-slate-50 rounded-lg bg-gradient-to-br from-indigo-800 to-purple-500 bg-cover flex flex-col space-y-2 shadow-xl`,
  stackxtestimonial: `text-slate-50 rounded-lg p-10 bg-gradient-to-bl from-purple-800 to-indigo-500 bg-cover flex flex-col space-y-2 md:col-start-2 shadow-cl `,
};

const Testimonials = () => {
  return (
    <div className=" bg-slate-50">
      <div className={testimonialStyles.container}>
        <div className={testimonialStyles.accusofttestimonial}>
          <div className="flex items-center mb-4">
            <FaAccusoft size={25} width={"bold"} />{" "}
            <span className="ml-4 text-xl font-bold"> Accusoft</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            inventore?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Cum, perferendis?
          </p>
          <p>Mr. Poonam Gupta</p>
          <p>2020, CEO</p>
        </div>
        <div className={testimonialStyles.stackxtestimonial}>
          <div className="flex items-center mb-4">
            <FaDatabase size={25} width={"bold"} />{" "}
            <span className="ml-4 text-xl font-bold"> Stack</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            inventore?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Cum, perferendis?
          </p>
          <p>Mr. Ritik Gupta</p>
          <p>2020, CEO</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
