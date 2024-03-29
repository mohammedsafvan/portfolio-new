import Button from "./Button";
import { buttonData } from "../utils/data";

const Hero = () => {
  return (
    <>
      <div id="1" className="py-12 px-5  md:py-24 md:px-16 lg:px-28 bg-white dark:bg-black h-screen  ">
        <h3 className="pb-20  font-montserrat text-2xl text-gray-500  dark:text-gray-400 ">
          Hey, I am
        </h3>
        <h1 className=" pb-10 md:pb-28 leading-[100%] font-montserrat  text-transparent bg-clip-text bg-gradient-to-r from-[#9845E8]  via-[#33D2FF] to-[#DD5789] font-bold text-[3.5rem]">
          Mohammed Safvan
        </h1>

        <p className="pb-10 md:pb-20 font-montserrat md:tracking-wider md:text-2xl  text-lg text-justify text-black dark:text-white">An individual with a passion for coding, currently pursuing undergraduate studies at Sree Chitra Thirunal College of Engineering. I like to work with new technologies and am particularly interested in Artificial Intelligence and Machine Learning. Familiar with popular web, mobile, AI, and ML technologies.
        </p>
        <div className="pb-10 md:pb-20  gap-6 grid grid-cols-2 md:grid-cols-4 ">
          {buttonData.map((element) => (
            <Button
              key={element.id}
              url={element.url}
              icon={element.icon}
              fromColor={element.fromColor}
              viaColor={element.viaColor}
              toColor={element.toColor}
              text={element.text}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Hero;
