import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Akoya Deluxe Cleaning",
    category: "Website Development",
    description:
      "A modern, user-friendly website with elegant visuals and a smooth browsing experience.",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=80",
    ],
  },
  {
    id: 2,
    title: "Creative UI/UX Design",
    category: "UI/UX",
    description:
      "Clean and engaging interface designs focused on usability and user experience.",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
    ],
  },
  {
    id: 3,
    title: "Mobile App Development",
    category: "App Development",
    description:
      "A modern mobile application concept designed for a smooth and simple user journey.",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=500&q=80",
    ],
  },
];

const categories = [
  "All",
  "Website Development",
  "UI/UX",
  "App Development",
];

const ProjectP1 = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImages, setSelectedImages] = useState({});

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="w-full overflow-hidden bg-white px-4 py-12 text-black sm:px-8 lg:px-16 flex flex-col">
      {/* Heading */}
      <div className="mx-auto text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Project Section
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base font-medium sm:text-xl">
          Explore a range of projects we've worked on across web,
          mobile, and design.
        </p>
      </div>

      {/* Category Filters */}
      <div className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-3 sm:mt-20 sm:gap-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-xl px-5 py-4 text-sm font-semibold transition-all duration-300 sm:px-8 sm:text-lg ${
              activeCategory === category
                ? "bg-gradient-to-r from-[#1600c8] to-[#080044] text-white shadow-lg"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-10 sm:mt-20">
        {filteredProjects.map((project) => {
          const activeImage =
            selectedImages[project.id] ?? project.images[0];

          return (
            <div
              key={project.id}
              className="grid min-w-0 grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10"
            >
              {/* Main Preview Image */}
              <div className="group relative h-[300px] overflow-hidden rounded-2xl shadow-xl sm:h-[420px] lg:h-[405px]">
                <img
                  src={activeImage}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                 
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm">
                    {project.category}
                  </span>

                  <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                    {project.title}
                  </h2>

                  <p className="mt-2 max-w-md text-sm text-white/90 sm:text-base">
                    Discover our latest creative work.
                  </p>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex min-w-0 flex-col justify-center rounded-2xl bg-white p-2 sm:p-5 lg:p-0">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  {project.title}
                </h2>

                <p className="mt-4 text-base leading-7 text-gray-600 sm:text-xl sm:leading-8">
                  {project.description}
                </p>

                {/* Image Thumbnails */}
                <div className="mt-5 grid grid-cols-4 gap-2 sm:gap-4">
                  {project.images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() =>
                        setSelectedImages((previous) => ({
                          ...previous,
                          [project.id]: image,
                        }))
                      }
                      aria-label={`Show project image ${index + 1}`}
                      className={`h-24 overflow-hidden rounded-2xl border-2 transition-all duration-300 sm:h-32 ${
                        activeImage === image
                          ? "border-[#1600c8] shadow-lg"
                          : "border-gray-200 hover:border-[#1600c8]"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} preview ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </button>
                  ))}
                </div>

                {/* View Project Button */}
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1600c8] to-[#080044] px-7 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    View Project
                    <span className="ml-2 transition-transform duration-300 hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectP1;