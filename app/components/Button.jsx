const Button = ({ fromColor, toColor, viaColor, text, url, icon, id }) => {
  return (
    <a href={url} target="_blank">
      <div
        className={` cursor-pointer   bg-gradient-to-tr  h-20  rounded-2xl  ${fromColor} ${viaColor}  ${toColor} p-[.1em]`}
      >
        <div className="text-black bg-white dark:bg-black dark:text-white text-lg h-full w-full  flex items-center justify-center font-montserrat font-semibold rounded-2xl ">
          <div className="px-2 text-black dark:text-white  ">{icon}</div>
          {text}
        </div>
      </div>
    </a>
  );
};
export default Button;
