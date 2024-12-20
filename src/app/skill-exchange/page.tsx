"use client"; // Mark this component as a client-side component

import { useState } from "react";

export default function SkillExchange() {
  // State to handle form input
  const [offerSkill, setOfferSkill] = useState("");
  const [seekSkill, setSeekSkill] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle the form submission logic (e.g., saving to a database)
    alert(`Offered Skill: ${offerSkill}, Seeking Skill: ${seekSkill}`);
  };

  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Skill Exchange</h1>
        <p className="text-lg text-gray-600 mt-4">
          Connect with fellow students to share your skills and learn from others!
        </p>
      </header>

      {/* Skill Exchange Form */}
      <section className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-500 text-center mb-6">
          Post Your Skills
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Offered Skill */}
          <div>
            <label
              htmlFor="offerSkill"
              className="block text-lg font-medium text-gray-700"
            >
              Skill You Can Offer
            </label>
            <input
              id="offerSkill"
              type="text"
              value={offerSkill}
              onChange={(e) => setOfferSkill(e.target.value)}
              className="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="E.g., JavaScript, Graphic Design, Public Speaking"
              required
            />
          </div>

          {/* Seeking Skill */}
          <div>
            <label
              htmlFor="seekSkill"
              className="block text-lg font-medium text-gray-700"
            >
              Skill You Are Seeking
            </label>
            <input
              id="seekSkill"
              type="text"
              value={seekSkill}
              onChange={(e) => setSeekSkill(e.target.value)}
              className="w-full p-4 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="E.g., Python, Web Development, Marketing"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-500 transition-all"
            >
              Post Skill Exchange
            </button>
          </div>
        </form>
      </section>

      {/* Current Skill Exchanges */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-blue-500 text-center mb-6">
          Recent Skill Exchanges
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skill Exchange 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-500">JavaScript Mentor</h3>
            <p className="text-gray-700 mt-2">Offering: JavaScript tutoring and mentorship.</p>
            <p className="text-gray-700 mt-2">Seeking: Python learning and project guidance.</p>
            <button className="mt-4 text-blue-500 font-semibold hover:underline">
              Contact for Exchange
            </button>
          </div>

          {/* Skill Exchange 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-500">Graphic Design Help</h3>
            <p className="text-gray-700 mt-2">Offering: Graphic design skills for projects and logos.</p>
            <p className="text-gray-700 mt-2">Seeking: Social media marketing advice and strategies.</p>
            <button className="mt-4 text-blue-500 font-semibold hover:underline">
              Contact for Exchange
            </button>
          </div>

          {/* Skill Exchange 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-500">Public Speaking Coach</h3>
            <p className="text-gray-700 mt-2">Offering: Public speaking coaching and practice sessions.</p>
            <p className="text-gray-700 mt-2">Seeking: Leadership skills development.</p>
            <button className="mt-4 text-blue-500 font-semibold hover:underline">
              Contact for Exchange
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
