import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData} = useSelector((state) => state.root);
  const {contact} = portfolioData;
  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(contact).map((key) => {
            return <p key={key} className="ml-5">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary">{contact[key]}</span>
            </p>;
          })}
          <p className="text-tertiary">{"}"}</p>
        </div>

        <div className="h-[400px]">
          <dotlottie-player
            src="https://lottie.host/9f3eb2b9-3ed4-4d92-a8f7-f60de3497c16/lxvXLWwH6R.lottie"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
