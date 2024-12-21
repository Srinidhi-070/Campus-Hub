import React from "react";

function TrafficIndicator({ location, density }) {
  let densityClass;

  // Apply CSS classes based on density
  switch (density.toLowerCase()) {
    case "low":
      densityClass = "bg-green-100 text-green-600";
      break;
    case "moderate":
      densityClass = "bg-yellow-100 text-yellow-600";
      break;
    case "high":
      densityClass = "bg-red-100 text-red-600";
      break;
    default:
      densityClass = "bg-gray-100 text-gray-600";
  }

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg shadow-md ${densityClass}`}
    >
      <h3 className="font-semibold">{location}</h3>
      <span className="text-sm font-medium capitalize">{density} Density</span>
    </div>
  );
}

export default TrafficIndicator;
