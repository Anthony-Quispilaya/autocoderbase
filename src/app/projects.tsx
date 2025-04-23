export default function Projects() {
  return (
    <div className="w-full py-16 px-8 md:px-16">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        <div className="bg-card rounded-2xl border-2 border-primary-600 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition group overflow-hidden flex flex-col">
          <div className="h-40 w-full bg-gradient-to-br from-primary-700 to-black flex items-center justify-center">
            <span className="text-white text-4xl font-bold opacity-60">IMG</span>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <h2 className="text-2xl font-mono font-bold mb-2 text-primary-600 group-hover:text-primary-500">Portfolio Website</h2>
            <p className="mb-4 text-black">A personal portfolio built with Next.js and Tailwind CSS to showcase my work and skills.</p>
            <a href="#" className="inline-block mt-auto px-4 py-2 rounded bg-primary-600 text-white font-semibold shadow hover:bg-primary-700 transition">View Project</a>
          </div>
        </div>
      </div>
    </div>
  );
}
