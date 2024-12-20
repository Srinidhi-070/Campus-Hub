import Link from 'next/link'; // Import Link for navigation

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Main Content Section */}
      <main className="flex flex-col gap-12 items-center text-center sm:items-start sm:text-left">
        {/* Welcome Message */}
        <h1 className="text-4xl font-bold">
          Welcome to Campus Hub!
        </h1>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
          {/* Skill Exchange */}
          <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Skill Exchange</h2>
            <p>
              Connect with fellow students to share and enhance your skills. Whether it's coding, design, or languages, let's learn together.
            </p>
            <Link
              className="inline-block mt-4 text-blue-500 hover:underline"
              href="/skill-exchange"
            >
              Learn More &rarr;
            </Link>
          </div>

          {/* Study Room Finder */}
          <div className="p-6 bg-green-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Study Room Finder</h2>
            <p>
              Find available study rooms in real-time and book them easily for group or solo study sessions.
            </p>
            <Link
              className="inline-block mt-4 text-green-500 hover:underline"
              href="/study-room"
            >
              Find Rooms &rarr;
            </Link>
          </div>

          {/* Campus Event Hub */}
          <div className="p-6 bg-yellow-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Campus Event Hub</h2>
            <p>
              Discover upcoming events, RSVP, and stay updated with reminders about all the exciting activities on campus.
            </p>
            <Link
              className="inline-block mt-4 text-yellow-500 hover:underline"
              href="/events"
            >
              Explore Events &rarr;
            </Link>
          </div>

          {/* Traffic Density in Cafeteria & Quadrangle */}
          <div className="p-6 bg-purple-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Traffic Density</h2>
            <p>
              Check the real-time crowd density at the cafeteria and quadrangle to avoid busy areas.
            </p>
            <Link
              className="inline-block mt-4 text-purple-500 hover:underline"
              href="/traffic-density"
            >
              Check Density &rarr;
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex gap-4 flex-col sm:flex-row mt-12">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/get-started"
          >
            Get Started
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/help"
          >
            Need Help?
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-2 flex gap-6 flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to nextjs.org →
        </Link>
      </footer>
    </div>
  );
}
