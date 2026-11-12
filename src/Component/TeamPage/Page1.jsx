
import React from "react";

const Page1= () => {
  const teamMembers = [
   {
  role: "CEO",
  name: "Chief Executive Officer",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop",
},
{
  role: "HEAD",
  name: "Head of Department",
  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop",
},
{
  role: "Business Developer",
  name: "Business Development",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop",
},
  ];

  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-12">
      {/* Heading */}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl">
          Meet Our{" "}
          <span className="text-[#1800B8]">Team</span>
        </h1>

        <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-black sm:text-xl">
          Our team of passionate and experienced professionals is
          dedicated to driving your success. From strategy to
          execution, we combine creativity, innovation, and insight
          to deliver exceptional results.
        </p>
      </div>

      {/* Team Cards */}
      <div className="mx-auto max-w-[100%]">
        <h2 className="mb-6 text-3xl font-medium text-black sm:text-4xl">
          Global{" "}
          <span className="font-semibold text-[#1800B8]">
            Leadership
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl bg-[#666666] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-[300px] w-full overflow-hidden sm:h-[250px] lg:h-[250px]">
                <img
                  src={member.image}
                  alt={member.role}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="bg-white px-5 py-4">
                <h3 className="text-xl font-bold text-black">
                  {member.role}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {member.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page1;
