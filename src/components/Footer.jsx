function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
              Customise Your Product
            </h2>

            <p className="mx-auto mt-4 max-w-sm text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              maiores ipsum eos temporibus ea nihil.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
            >
              Get Started
            </a>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
           <p>Made with Love and coffe</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
