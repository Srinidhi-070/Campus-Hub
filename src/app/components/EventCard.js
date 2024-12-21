export default function EventCard({ title, date, location }) {
    return (
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{date}</p>
        <p className="text-gray-500">{location}</p>
      </div>
    );
  }
  