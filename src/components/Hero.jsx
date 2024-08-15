import { about } from "../../public/profileData";
import profilePic from "../assets/balav.png"

function Hero() {
    const { name, description, linkedin, github, resume } = about
  return (
    <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold leading-tight text-black sm:text-5xl lg:text-5xl">
              Hey 👋 I am <br className="block sm:hidden" />
              {name}
            </h2>
            <p className="max-w-lg mt-3 text-xl text-justify leading-relaxed text-gray-600 md:mt-8">
              {description}
            </p>
<br/>
            <div className="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
              <button className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                Github
              </button>

              <button className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative">
                LinkedIn
              </button>

              <button className="inline-block rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative">
                Resume
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt=""
            />
            <img
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-100"
              //  src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
              src={profilePic}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
