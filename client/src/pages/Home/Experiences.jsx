import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(-1);
  const { portfolioData} = useSelector((state) => state.root);
  const {experiences} = portfolioData;

  return (
    <div>
      <SectionTitle title="Experience" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div
              key={experience._id}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className={`cursor-pointer ${
                selectedItemIndex === index
                  ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                  : "text-white"
              }`}
            >
              <h1 className="text-xl px-3">{experience.company}</h1>
            </div>
          ))}
        </div>
          {experiences.length > 0 && selectedItemIndex !== -1 && <div className="flex flex-col gap-8">
          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].title ? experiences[selectedItemIndex].title : "Title"}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white">
          {experiences[selectedItemIndex].description}
          </p>
        </div>}
        
      </div>
    </div>
  );
}

export default Experiences;
