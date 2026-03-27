export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 max-w-6xl mx-auto">
      <h1 className="font-bold text-lg">RP</h1>
      <div className="space-x-6">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}