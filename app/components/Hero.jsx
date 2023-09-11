import Button from "./Button";
import { buttonData } from "../utils/data";

const Hero = () => {
  return (
    <>
      <div id="1" className="pt-20 bg-white dark:bg-black h-screen px-10 ">
        <h3 className="pt-12 pb-5 font-montserrat text-2xl text-gray-500  dark:text-gray-400 ">
          Hey, I am
        </h3>
        <h1 className="pb-4 md:pt-14 leading-[100%] font-montserrat  text-transparent bg-clip-text bg-gradient-to-r from-[#9845E8]  via-[#33D2FF] to-[#DD5789] font-bold text-[3.5rem]">
          Mohammed Safvan
        </h1>

        <p className="font-montserrat md:tracking-wider pt-16 md:text-2xl  text-lg text-justify text-black dark:text-white">
          An individual with passion for coding. Currently pursuing
          undergraduates from Sree Chitra Thirunal College of Engineering. I
          Likes to work with new technologies. Interested in Artificial
          Intelligence and Machine Learning. Familiar with popular technologies
          of web, mobile AI & ML
        </p>
        <div className="mt-7 gap-6 grid grid-cols-2 md:grid-cols-4 md:pt-24">
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
