import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const About = () => {
  const [more, setMore] = useState(false);
  return (
    <div>
      <Navbar />
      <Banner
        img={
          "https://cdn.financebuzz.com/images/2020/08/07/values-based-investing.jpg"
        }
        heading={"About us"}
        text={"   who we are?"}
      />
      <div className=" w-[90%] lg:w-[80%] mx-auto py-16">
        <div className=" flex flex-col lg:flex-row justify-between items-center">
          <div className=" lg:w-[50%]">
            <div className="mb-8">
              <h1 className=" text-green-600 font-semibold text-xl lg:text-4xl tracking-wide capitalize">
                Our Agency story
              </h1>
              <p className="text-yellow-500 font-medium lg:text-xl">
                Check out our company story and work process
              </p>
            </div>
            <p className="text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              quod illo officia necessitatibus maiores repellendus cum excepturi
              error tenetur aliquam asperiores ut odit blanditiis quam dolorem a
              aut natus rem, molestiae dolorem.
            </p>
            <br />

            <p className="text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              maiores, vero quibusdam officiis consequuntur voluptatem similique
              corporis magni laborum quae. blanditiis quam dolorem a aut natus
              rem, molestiae dolorem.
            </p>
            {more && (
              <div>
                <br />
                <p className="text-sm lg:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  temporibus ut esse fuga consectetur libero consequuntur
                  eligendi est autem, aut fugit deleniti repudiandae rerum
                  tempore exercitationem excepturi perferendis voluptatem,
                  dolores incidunt vitae deserunt vel nobis culpa numquam?
                  Voluptate quidem veritatis repellendus soluta aliquam itaque
                  asperiores totam nobis, repudiandae numquam. Suscipit esse
                  quaerat porro voluptatibus quas nostrum eius quae nihil? Illo
                  hic, impedit ipsum quas minima voluptatum, autem molestias
                  quibusdam omnis consequuntur veniam similique doloremque
                  earum!
                </p>
              </div>
            )}

            <br />
            <button
              onClick={() => setMore(!more)}
              className=" bg-green-700 text-white py-3 px-6 rounded text-sm lg:text-base"
            >
              {more ? "Show less" : "More about us"}
            </button>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
