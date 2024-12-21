import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gradientStart to-gradientEnd p-4 text-white">
      <ul className="flex justify-around">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/skill-exchange">Skill Exchange</Link></li>
        <li><Link href="/study-rooms">Study Rooms</Link></li>
        <li><Link href="/events">Events</Link></li>
        <li><Link href="/traffic">Traffic</Link></li>
      </ul>
    </nav>
  );
}
