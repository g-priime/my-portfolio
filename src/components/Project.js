import React, { useEffect, useState } from "react";
//import project from "../../studio/schemas/project.js";
import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);
  const reverseData = projectData && projectData
  .sort((a, b) => (a.date > b.date ? 1 : -1))
  .slice(2)
  .reverse();
  const arr1 = reverseData && reverseData.slice(0, 2);
  const arr2 = reverseData && reverseData.slice(3, 5);
  const displayData = arr1 && arr2 && arr1.concat(arr2);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-900 flex justify-left mb-12">
          Welcome to my projects page!
        </h2>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayData &&
            displayData
              .map((project, index) => (
                <article className="relative rounded-lg shadow-xl bg-white p-4" key={index}>
                  <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="text-gray-500 text-xs space-x-0">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                      <span>
                        <strong className="font-bold">Finished on</strong>:{" "}
                        {new Date(project.date).toLocaleDateString()}
                      </span>
                      <span>
                        <strong className="font-bold">Location</strong>:{" "}
                        {project.place}
                      </span>
                      <span>
                        <strong className="font-bold">Type:</strong>{" "}
                        {project.projectType}
                      </span>
                    </div>
                    <p className="my-6 text-lg text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                    >
                      View The Project{" "}
                      <span role="img" aria-label="right pointer">
                        👉
                      </span>
                    </a>
                  </div>
                </article>
              ))}
        </section>
      </section>
    </main>
  );
}
