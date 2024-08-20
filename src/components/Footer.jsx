import Email from "./Email"

function Footer() {
  return (
    <>
      <footer id="footer" className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
              Contact me
            </h2>
            <Email />
          </div>

          <div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
           <p className="font-bold">Hey you reached the Footer ^_^</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
