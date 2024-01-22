import Button from "./Button";
import { buttonData } from "../utils/data";

const Hero = () => {
  return (
    <>
      <div id="1" className="p-12  md:py-24 bg-white dark:bg-black h-screen  ">
        <h3 className="pb-10  font-montserrat text-2xl text-gray-500  dark:text-gray-400 ">
          Hey, I am
        </h3>
        <h1 className=" pb-10 md:pb-20 leading-[100%] font-montserrat  text-transparent bg-clip-text bg-gradient-to-r from-[#9845E8]  via-[#33D2FF] to-[#DD5789] font-bold text-[3.5rem]">
          Mohammed Safvan
        </h1>

        <p className="pb-10 md:pb-20 font-montserrat md:tracking-wider md:text-2xl  text-lg text-justify text-black dark:text-white">
          An individual with passion for coding. Currently pursuing
          undergraduates from Sree Chitra Thirunal College of Engineering. I
          Likes to work with new technologies. Interested in Artificial
          Intelligence and Machine Learning. Familiar with popular technologies
          of web, mobile AI & ML
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
