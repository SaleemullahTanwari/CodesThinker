
import React from 'react';
import { FaLightbulb, FaUsers, FaUsersGear, FaStopwatch } from 'react-icons/fa6';

const Page2 = () => {
  const Page = [
    {
      id: 1,
      title: 'Custom Web Experiences',
      icon: <FaLightbulb />,
    },
    {
      id: 2,
      title: 'Innovative UI/UX Design',
      icon: <FaUsers />,
    },
    {
      id: 3,
      title: 'Scalable Tech Solutions',
      icon: <FaUsersGear />,
    },
    {
      id: 4,
      title: '24/7 Support & Maintenance',
      icon: <FaStopwatch />,
    },
  ];

  return (
   <section className="w-full bg-sky-50 px-6 py-16">
  <h2 className="mb-8 text-center text-5xl font-bold text-blue-800">
    What Makes Us Stand Out?
  </h2>

  <div className="flex flex-wrap justify-center gap-8">
    {Page.map((item) => (
      <div
        key={item.id}
        className="group flex h-[250px] flex-col items-center rounded-[25px] bg-white px-4 py-6 shadow-2xl transition duration-300 hover:bg-[#0F00A9]"
      >
        <div className="mb-5 flex h-21 w-21 items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-sky-500 text-5xl text-white">
          {item.icon}
        </div>

        <h3 className="w-[180px] text-center text-2xl font-semibold text-black transition duration-300     group-hover:text-white">
          {item.title}
        </h3>
      </div>
    ))}
  </div>
</section>
  );
};

export default Page2;
