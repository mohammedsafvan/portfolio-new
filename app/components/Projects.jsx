import Project from "./Project";
import { projects } from "../utils/data";

const Projects = () => {
  return (
    <div className="pt-6 font-montserrat bg-white dark:bg-black min-h-full px-10 pb-16">
      <h3 className="pt-12 pb-5 text-2xl text-black dark:text-white">
        Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-10">
        {projects.map((element, index) => (
          <Project key={index} element={element} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
