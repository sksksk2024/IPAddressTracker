import { useState } from 'react';
import axios from 'axios';
import arrow from './../images/icon-arrow.svg';

type IPData = {
  ip: string;
  city: string;
  region: string;
  country: string;
  timezone: string;
  isp: string;
};

export function Header() {
  const [ip, setIp] = useState<string>('');
  const [data, setData] = useState<IPData | null>(null);

  const handleSearch = async () => {
    if (!ip) {
      return alert('Please enter an IP address or domain.');
    }

    try {
      const res = await axios.get(`https://ipwhois.app/json/${ip}`);
      setData({
        ip: res.data.ip,
        city: res.data.city,
        region: res.data.region,
        country: res.data.country,
        timezone: res.data.timezone,
        isp: res.data.isp,
      });
    } catch (error) {
      console.error('Error fetching IP data:', error);
      alert('Failed to fetch data. Please try again.');
    }
  };

  return (
    <header className="w-screen px-16P md:px-32P py-48P max-h-container-800 h-400H text-center lg:text-start">
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
            value={ip}
            onChange={(e) => setIp(e.target.value)}
          />
          <img
            src={arrow}
            className="bg-black p-22.08P rounded-r-10BR cursor-pointer hover:bg-very-dark-gray z-0"
            alt="Enter your IP Address"
            onClick={handleSearch}
          />
        </label>

        {data && (
          <section className="mt-8M max-w-container-600 lg:max-w-container-1440 w-full flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:items-start gap-12 px-16P py-32P bg-white relative lg:top-112I rounded-10BR z-50">
            <div className="flex flex-col justify-center items-center lg:items-start tracking-widest">
              <h2 className="font-bold text-dark-gray text-xs uppercase">
                IP Address
              </h2>
              <p className="font-semibold text-black text-lg">{data.ip}</p>
            </div>
            <div className="relative">
              <div className="hidden lg:flex absolute -left-32I h-64H border border-dark-gray opacity-50"></div>
              <div className="flex flex-col justify-center items-center lg:items-start tracking-widest">
                <h2 className="font-bold text-dark-gray text-xs uppercase">
                  Location
                </h2>
                <p className="font-semibold text-black text-lg">
                  {data.city}, {data.region}, {data.country}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="hidden lg:flex absolute -left-32I h-64H border border-dark-gray opacity-50"></div>
              <div className="flex flex-col justify-center items-center lg:items-start tracking-widest">
                <h2 className="font-bold text-dark-gray text-xs uppercase">
                  Timezone
                </h2>
                <p className="font-semibold text-black text-lg">
                  {data.timezone}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="hidden lg:flex absolute -left-32I h-64H border border-dark-gray opacity-50"></div>
              <div className="flex flex-col justify-center items-center lg:items-start tracking-widest">
                <h2 className="font-bold text-dark-gray text-xs uppercase">
                  ISP
                </h2>
                <p className="font-semibold text-black text-lg">{data.isp}</p>
              </div>
            </div>
          </section>
        )}
      </div>
    </header>
  );
}
