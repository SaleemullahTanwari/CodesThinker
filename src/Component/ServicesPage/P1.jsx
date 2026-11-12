import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Website Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    description: "Custom, responsive websites designed to meet your business needs and provide an excellent user experience.",
  },
  {
    id: 2,
    title: "App Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    description: "High-quality mobile apps for iOS and Android that deliver seamless performance and great user experience.",
  },
  {
    id: 3,
    title: "DevOps & Cloud",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=900&q=80",
    description: "Automate deployments, improve scalability, and reduce downtime with our DevOps and cloud solutions.",
  },
  {
    id: 4,
    title: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
    description: "Create attractive and user-friendly interfaces that improve customer engagement and usability.",
  },
  {
    id: 5,
    title: "E-Commerce Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    description: "Build secure online stores with product catalogs, shopping carts, and smooth checkout experiences.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    image: "https://images.unsplash.com/photo- digital-marketing?auto=format&fit=crop&w=900&q=80",
    description: "Grow your online presence through effective digital campaigns and targeted marketing strategies.",
  },
  {
    id: 7,
    title: "SEO Optimization",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=900&q=80",
    description: "Improve search engine rankings, increase organic traffic, and help customers discover your business.",
  },
  {
    id: 8,
    title: "Graphic Design",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=900&q=80",
    description: "Design professional graphics, brand assets, and marketing materials that communicate your message.",
  },
  {
    id: 9,
    title: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    description: "Protect your applications and business data with security assessments and reliable protection strategies.",
  },
  {
    id: 10,
    title: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    description: "Use intelligent automation and machine learning solutions to improve business efficiency.",
  },
  {
    id: 11,
    title: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    description: "Transform complex data into useful insights with analytics, visualization, and predictive models.",
  },
  {
    id: 12,
    title: "API Development",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    description: "Develop reliable APIs that connect applications and enable secure communication between services.",
  },
  {
    id: 13,
    title: "Database Management",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=80",
    description: "Organize, maintain, and optimize databases for reliable performance and efficient data access.",
  },
  {
    id: 14,
    title: "Software Testing",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    description: "Identify bugs and improve software quality through systematic testing and quality assurance.",
  },
  {
    id: 15,
    title: "Blockchain Development",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=80",
    description: "Build blockchain applications and smart contracts for transparent and secure digital transactions.",
  },
  {
    id: 16,
    title: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    description: "Deploy scalable cloud infrastructure to improve availability, flexibility, and business performance.",
  },
  {
    id: 17,
    title: "WordPress Development",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=80",
    description: "Create customizable WordPress websites with responsive layouts and easy content management.",
  },
  {
    id: 18,
    title: "Custom Software Development",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    description: "Build tailored software solutions designed around your business processes and specific requirements.",
  },
  {
    id: 19,
    title: "IT Consulting",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    description: "Get expert technology guidance to improve workflows, select tools, and plan digital transformation.",
  },
  {
    id: 20,
    title: "Website Maintenance",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    description: "Keep your website secure and updated with bug fixes, performance improvements, and ongoing support.",
  },
];


const P1 = () => {
  return (
    <section className="w-full overflow-x-clip bg-white px-5 py-12 sm:px-8 lg:py-10">
      {/* Heading */}
      <h2 className="mb-16 text-center text-3xl font-semibold text-black sm:text-4xl">
        Latest Services
      </h2>

      {/* Cards */}
      <div className="mx-auto grid w-full max-w-[1450px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex min-w-0 flex-col overflow-hidden rounded-b-xl border-t-4 border-b-[7px] border-[#203BC9] bg-white pb-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image */}
            <div className="h-[230px] w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col px-4 pt-5">
              <h3 className="mb-2 text-xl font-semibold text-black sm:text-2xl">
                {service.title}
              </h3>

              <p className="text-base leading-[1.7] text-[#334155]">
                {service.description}
              </p>

              <div className="mt-auto flex justify-center pt-8">
                       <Link
                      to={`/Services/${service.id}`}
                      className="inline-block rounded-full bg-gradient-to-r from-[#080039] to-[#1800C8] px-5 py-3 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-lg">
                             Learn More
                        </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default P1;