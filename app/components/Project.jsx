import Image from "next/image";
import Button from "./Button";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Project = ({ element }) => {
  return (
    <div className="max-w-md box-border bg-transparent border-gray-300 shadow-sm border-[.1em] p-3 rounded-2xl">
      <Image
        width={0}
        height={0}
        loading="lazy"
        sizes="100vw"
        style={{ width: "100%", height: "300px" }}
        className=" rounded-lg max-h-60"
        src={element.image}
        alt={"image"}
      />

      <div className="px-2 py-2">
        <div className="font-bold text-xl dark:text-white  mb-9">
          {element.name}
        </div>
        <p className="text-gray-700 dark:text-gray-400 text-justify text-sm leading-6">
          {element.description}
        </p>
        <div className="flex flex-row">
          {element.techStack.map((element, index) => (
            <div key={index} className="w-fit  text-blue-500 py-6 pr-3">
              <span>{`${element}`}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-row  items-center">
          {element.preview && (
            <Button
              text={"Live Preview"}
              url={element.preview}
              fromColor={"from-[#3f5efb]"}
              viaColor={"via-[#9f52b2]"}
              toColor={"to-[#fc466b]"}
            />
          )}
          <Link href={element.url}>
            <AiFillGithub className="mx-3" size={50} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
