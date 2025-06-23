import React from "react";
import { CodeIcon, LightbulbIcon, GlobeIcon } from "lucide-react";
export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-blue-400">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 mb-6 text-lg">
              Hello! I'm Fernando, a backend developer focused on
              building scalable, high-performance systems for Industry 4.0 and
              intelligent automation. I’m passionate about crafting robust
              architectures and leveraging AI to drive real impact through data.
            </p>
            <p className="text-gray-300 mb-6 text-lg">
              I work primarily with .NET, Python, and cloud technologies to
              develop APIs, real-time dashboards, and data pipelines. My
              approach is grounded in Clean Architecture, SOLID principles, and
              modern software engineering practices.
            </p>
            <p className="text-gray-300 text-lg">
              Outside of work, I’m often researching computer vision,
              contributing to open-source, or optimizing ETL pipelines with
              Delta Lake. I thrive on learning and evolving with the fast-moving
              tech ecosystem.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <CodeIcon size={24} className="text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Clean Architecture</h3>
              </div>
              <p className="text-gray-300">
                I design solutions based on Clean Architecture and SOLID
                principles, ensuring that codebases are scalable, testable, and
                easy to maintain.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <LightbulbIcon size={24} className="text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">AI & Automation</h3>
              </div>
              <p className="text-gray-300">
                From smart dashboards to vision-based systems, I integrate
                artificial intelligence and automation to optimize industrial
                and business processes.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <GlobeIcon size={24} className="text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Data-Driven Mindset</h3>
              </div>
              <p className="text-gray-300">
                Whether it's building real-time ETL pipelines or analyzing
                system behavior, I rely on data to drive architecture decisions
                and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
