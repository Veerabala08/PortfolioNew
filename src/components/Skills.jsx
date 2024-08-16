import { skills } from "../../public/profileData"; // Ensure you have this data imported

function Skills() {
  return (
    <div id="skills" className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-black">
      <h2 className="[color:white] text-center text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
        Skills
      </h2>
      
      <div  className="flex flex-row flex-wrap gap-5 justify-center mt-10">
        {skills.map((skill, index) => (
          <a
            key={index}
            className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
            href="#"
          >
            {skill}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Skills;
