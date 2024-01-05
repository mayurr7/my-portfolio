import React from "react";

const MyInfo = () => {
  const HelloWorld = {
    _id: "127.0.0.1",
    name: "Bharat Bhandari",
    developer: true,
    technologies: ["js", "react", "node", "..."],
    interests: ["MERN stack development", "AI", "..."],
  };

  return (
    <div className="relative p-4 rounded-lg bg-custom">
      <div className="absolute top-6 left-12 blinking-rectangle"></div>
      <pre className="font-mono text-lg text-gray-400">
        <span className="text-yellow-300">const HelloWorld = </span>
        {`{\n  `}
        <span className="text-green-300">"_id": </span>
        <span className="text-white">"{HelloWorld._id}",</span>
        {`\n  `}
        <span className="text-green-300">"name": </span>
        <span className="text-white">"{HelloWorld.name}",</span>
        {`\n  `}
        <span className="text-green-300">"developer": </span>
        <span className="text-yellow-300">
          {HelloWorld.developer.toString()},
        </span>
        {`\n  `}
        <span className="text-green-300">"technologies": </span>
        <span className="text-white">[</span>

        {HelloWorld.technologies.map((tech, index) => (
          <span key={index} className="text-white">
            "{tech}"{index === HelloWorld.technologies.length - 1 ? "" : ","}
          </span>
        ))}

        <span className="text-white">],</span>
        {`\n  `}
        <span className="text-green-300">"interests": </span>
        <span className="text-white">[</span>
        {HelloWorld.interests.map((interest, index) => (
          <span key={index} className="text-white">
            "{interest}"{index === HelloWorld.interests.length - 1 ? "" : ","}
          </span>
        ))}
        <span className="text-white">],</span>
        {`\n}`}
      </pre>
    </div>
  );
};

export default MyInfo;
