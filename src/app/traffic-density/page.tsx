'use client';  // Mark this file as a client-side component

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css";  // Import Leaflet's CSS for correct styling
import TrafficIndicator from "../components/TrafficIndicator";
import L from 'leaflet';  // Import Leaflet for custom icons

// Dynamically import react-leaflet components with ssr: false
const MapContainerWithNoSSR = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayerWithNoSSR = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const MarkerWithNoSSR = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const PopupWithNoSSR = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

// Traffic data with updated coordinates near MSRIT
const trafficData = [
  { location: "Cafeteria", density: "Low", lat: 13.0305, lng: 77.5648 },
  { location: "Quadrangle", density: "Moderate", lat: 13.0311, lng: 77.5654 },
];

// Custom Leaflet marker icon
const defaultIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),  // Ensure correct path for the marker icon
  iconSize: [25, 41],  // Icon size
  iconAnchor: [12, 41],  // Anchor point
  popupAnchor: [1, -34],  // Popup anchor
  shadowSize: [41, 41]  // Shadow size
});

export default function TrafficDensity() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set the component to client mode
  }, []);

  if (!isClient) {
    return null; // Placeholder for server-side rendering
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-purple-50 to-purple-100 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-purple-800 mb-4">
          Campus Traffic Tracker
        </h1>
        <p className="text-lg text-gray-600">
          Monitor real-time crowd density at key campus locations.
        </p>
      </header>

      <main className="max-w-4xl mx-auto grid gap-8">
        {trafficData.map((data, index) => (
          <TrafficIndicator
            key={index}
            location={data.location}
            density={data.density}
          />
        ))}
      </main>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          Campus Traffic Map
        </h2>
        <div className="w-full h-[500px] rounded-lg shadow-md overflow-hidden">
          <MapContainerWithNoSSR
            center={[13.0308, 77.5651]} // New Center Coordinates
            zoom={17} // Zoom level for closer campus view
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayerWithNoSSR
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {trafficData.map((data, index) => (
              <MarkerWithNoSSR key={index} position={[data.lat, data.lng]} icon={defaultIcon}>
                <PopupWithNoSSR>
                  <strong>{data.location}</strong> <br />
                  Density: {data.density}
                </PopupWithNoSSR>
              </MarkerWithNoSSR>
            ))}
          </MapContainerWithNoSSR>
        </div>
      </section>

      <footer className="text-center mt-16">
        <p className="text-sm text-gray-600">
          Data is refreshed every 15 minutes to ensure accuracy.
        </p>
      </footer>
    </div>
  );
}
