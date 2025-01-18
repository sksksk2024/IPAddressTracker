import arrow from './../images/icon-arrow.svg';

export function Header() {
  return (
    // h-[30dvh] max-h-container-400
    <header className="w-screen px-16P md:px-32P py-48P max-h-container-800 h-[40dvh]">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-white text-2xl">IP Address Tracker</h1>

        <label
          htmlFor="ipAddress"
          aria-label="Enter any IP address and we will show you where is its location"
          className="flex justify-center items-center max-w-container-600 w-screen px-16P sm:px-0"
        >
          <input
            type="text"
            id="ipAddress"
            className="w-full text-black p-16P rounded-l-10BR bg-white cursor-pointer z-20"
            placeholder="Search for any IP address or domain"
          />
          <img
            src={arrow}
            className="bg-black p-22.08P rounded-r-10BR cursor-pointer hover:bg-very-dark-gray z-0"
            alt="Enter your IP Address"
          />
        </label>

        <section className="mt-8M max-w-container-600 lg:max-w-container-1440 w-full flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:items-start gap-4 px-16P py-32P bg-white relative lg:top-48I rounded-10BR">
          <div className="flex flex-col justify-center items-center lg:items-start tracking-widest">
            <h2 className="font-bold text-dark-gray text-xs uppercase">
              IP Address
            </h2>
            <p className="font-semibold text-black text-lg">192.212.174.101</p>
          </div>
          <div className="relative">
            <div className="hidden lg:flex absolute -left-32I h-64H border border-dark-gray opacity-50"></div>
            <div className="flex flex-col justify-center items-center lg:items-start tracking-widest">
              <h2 className="font-bold text-dark-gray text-xs uppercase">
                Location
              </h2>
              <p className="font-semibold text-black text-lg">
                Brooklyn, NY 10001
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="hidden lg:flex absolute -left-32I h-64H border border-dark-gray opacity-50"></div>
            <div className="flex flex-col justify-center items-center lg:items-start tracking-widest">
              <h2 className="font-bold text-dark-gray text-xs uppercase">
                Timezone
              </h2>
              <p className="font-semibold text-black text-lg">UTC -05:00</p>
            </div>
          </div>
          <div className="relative">
            <div className="hidden lg:flex absolute -left-32I h-64H border border-dark-gray opacity-50"></div>
            <div className="flex flex-col justify-center items-center lg:items-start tracking-widest">
              <h2 className="font-bold text-dark-gray text-xs uppercase">
                ISP
              </h2>
              <p className="font-semibold text-black text-lg">
                SpaceX Startlink
              </p>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}
