// Components/ProjectCard.js
export const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg p-4 m-4">
      <h2 className="text-xl font-bold">{project.name}</h2>
      <p>{project.description}</p>
      {/* ...autres informations et icônes... */}
    </div>
  );
};
