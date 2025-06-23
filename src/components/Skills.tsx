import React from 'react';

export const Skills = () => {
  const architectureSkills = [
    { name: 'Clean Architecture', level: 'Expert' },
    { name: 'SOLID Principles', level: 'Expert' },
    { name: 'Design Patterns', level: 'Advanced' },
    { name: 'Domain-Driven Design (DDD)', level: 'Advanced' },
    { name: 'System Design', level: 'Advanced' }
  ];

  const backendSkills = [
    { name: 'C# / .NET', level: 'Advanced' },
    { name: 'Python / Django Framework', level: 'Expert' },
    { name: 'Python / FastAPI', level: 'Expert' },
    { name: 'Typescript / NestJs', level: 'Expert' },
    { name: 'Entity Framework Core', level: 'Advanced' },
    { name: 'PostgreSQL / SQL Server', level: 'Advanced' },
    { name: 'RESTful APIs', level: 'Expert' }
  ];

  const dataSkills = [
    { name: 'ETL Pipelines', level: 'Advanced' },
    { name: 'Delta Lake', level: 'Advanced' },
    { name: 'Redis', level: 'Intermediate' },
    { name: 'Data Modeling', level: 'Advanced' },
    { name: 'Computer Vision (CV)', level: 'Intermediate' }
  ];

  const SkillBar = ({ name, level }: { name: string; level: string }) => {
    const levelMap = {
      Expert: '100%',
      Advanced: '85%',
      Intermediate: '70%',
      Beginner: '50%'
    };

    return (
      <div className="mb-4 transform hover:scale-105 transition-all duration-300">
        <div className="flex justify-between mb-1">
          <span className="text-gray-300">{name}</span>
          <span className="text-gray-400">{level}</span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full animate-skill-fill"
            style={{
              width: levelMap[level as keyof typeof levelMap],
              animation: `skillFill 1.5s ease-out forwards`
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-400">Skills</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg transform hover:translate-y-[-4px] transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Architecture & Engineering
            </h3>
            {architectureSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg transform hover:translate-y-[-4px] transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Backend Development
            </h3>
            {backendSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg transform hover:translate-y-[-4px] transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Data & AI
            </h3>
            {dataSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
