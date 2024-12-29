import React, { useEffect } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { about = {} } = portfolioData;
  const { skills, dotlottieUrl, descriprion1, descriprion2, descriprion3 } =
    about;

  useEffect(() => {
    console.log("-----about-----", JSON.stringify(descriprion1));
  }, [about]);

  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[40vh] w-1/2 sm:w-full">
          <dotlottie-player
            src={dotlottieUrl}
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">{descriprion1}</p>
          <p className="text-white">{descriprion2}</p>
          <p className="text-white">{descriprion3}</p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>

        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill, index) => {
            return (
              <div key={index} className="border border-tertiary py-3 px-5">
                <h1 className="text-tertiary">{skill}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;

// const skills = [
//   "JavaScript",
//   "React",
//   "Node",
//   "Express",
//   "MongoDB",
//   "Firebase",
//   "Appwrite",
// ]
