export default function SkillCard({ skill, description, user }) {
    return (
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <h3 className="text-lg font-bold">{skill}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-gray-500">By: {user}</p>
      </div>
    );
  }
  