"use client"; // Mark this component as a client-side component

import React, { useState } from "react";
import Image from "next/image";
import Calendar from "react-calendar"; // Importing the calendar component
import "react-calendar/dist/Calendar.css"; // Importing styles for the calendar

export default function Events() {
  const [date, setDate] = useState(new Date()); // State to handle the selected date

  // Handle date change
  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Upcoming Campus Events</h1>
        <p className="text-lg text-gray-600 mt-4">
          Stay updated with the latest events happening around campus. RSVP now!
        </p>
      </header>

      {/* Events List */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Event 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <Image
            className="rounded-lg"
            src="/event1.jpg"
            alt="Event Image"
            width={500}
            height={300}
          />
          <h3 className="text-xl font-semibold text-blue-500 mt-4">Tech Talk: AI and the Future</h3>
          <p className="text-gray-700 mt-2">Join us for a deep dive into the future of AI and how it's shaping various industries.</p>
          <p className="text-sm text-gray-500 mt-2">Date: 10th December 2024</p>
          <p className="text-sm text-gray-500 mt-1">Time: 3:00 PM - 5:00 PM</p>
          <a
            className="inline-block mt-4 text-blue-500 font-semibold hover:underline"
            href="/rsvp/event1"
          >
            RSVP Now &rarr;
          </a>
        </div>

        {/* Event 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <Image
            className="rounded-lg"
            src="/event2.jpg"
            alt="Event Image"
            width={500}
            height={300}
          />
          <h3 className="text-xl font-semibold text-blue-500 mt-4">Workshop: Sustainable Design</h3>
          <p className="text-gray-700 mt-2">
            Learn about sustainable design practices and how you can make a positive environmental impact through design.
          </p>
          <p className="text-sm text-gray-500 mt-2">Date: 15th December 2024</p>
          <p className="text-sm text-gray-500 mt-1">Time: 11:00 AM - 1:00 PM</p>
          <a
            className="inline-block mt-4 text-blue-500 font-semibold hover:underline"
            href="/rsvp/event2"
          >
            RSVP Now &rarr;
          </a>
        </div>

        {/* Event 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <Image
            className="rounded-lg"
            src="/event3.jpg"
            alt="Event Image"
            width={500}
            height={300}
          />
          <h3 className="text-xl font-semibold text-blue-500 mt-4">Cultural Night: A Celebration of Diversity</h3>
          <p className="text-gray-700 mt-2">
            Experience a night of culture, music, and performances by talented students from different backgrounds.
          </p>
          <p className="text-sm text-gray-500 mt-2">Date: 20th December 2024</p>
          <p className="text-sm text-gray-500 mt-1">Time: 6:00 PM - 9:00 PM</p>
          <a
            className="inline-block mt-4 text-blue-500 font-semibold hover:underline"
            href="/rsvp/event3"
          >
            RSVP Now &rarr;
          </a>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="mt-16 bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-500 text-center mb-6">
          Event Calendar
        </h2>

        {/* React Calendar */}
        <div className="mb-6">
          <Calendar
            onChange={handleDateChange}
            value={date}
            className="shadow-lg rounded-lg"
          />
        </div>

        {/* Display Selected Date */}
        <div className="text-center mt-4">
          <p className="text-lg font-medium text-gray-700">
            Selected Date: {date.toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <p className="text-lg text-gray-700">Interested in more events? Check out our full event calendar and RSVP to more exciting activities!</p>
        <a
          className="mt-4 inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-500"
          href="/events-calendar"
        >
          View All Events
        </a>
      </section>
    </div>
  );
}
