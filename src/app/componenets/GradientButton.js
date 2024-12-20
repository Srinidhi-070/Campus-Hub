export default function GradientButton({ text, link }) {
    return (
      <a
        href={link}
        className="bg-gradient-to-r from-gradientStart to-gradientEnd text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition"
      >
        {text}
      </a>
    );
  }
  