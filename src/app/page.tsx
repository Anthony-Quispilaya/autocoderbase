import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle background pattern overlay */}
      <div
  className="fixed inset-0 z-0 opacity-30"
  style={{
    background: "radial-gradient(ellipse 80% 60% at 50% 0%,rgb(85, 0, 0) 0%,rgb(19, 6, 6) 100%)",
    pointerEvents: "none"
  }}
/>
{/* Red dots SVG pattern overlay */}
<div
  className="fixed inset-0 z-0 opacity-10 pointer-events-none"
  aria-hidden="true"
  style={{
    backgroundImage: `url('data:image/svg+xml;utf8,<svg width="50" height="50" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="1.5" fill="%23ff2d2d"/></svg>')`,
    backgroundRepeat: 'repeat',
    backgroundSize: '20px 20px',
    pointerEvents: 'none',
    zIndex: 0
  }}
/>

      <main className="relative w-full space-y-20 pt-24 px-8 md:px-16 z-10">
        {/* Hero Section */}
        <section className="text-center space-y-8 w-full px-0 animate-fade-in-up">
          <h1
  className="font-mono tracking-tighter text-6xl md:text-7xl mb-6 inline-block px-12 py-6 rounded-full text-white shadow-2xl border-8 animate-glow"
  style={{
    background: 'linear-gradient(0deg, rgba(87, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.78) 100%)',
    boxShadow: '0 8px 48px 0 rgba(0,0,0,0.10)',
    border: '4px solid rgba(255, 255, 255, 0.2)'
  }}
>
  Anthony Quispilaya
</h1>
          <p className="text-xl text-white w-full text-center font-light animate-fade-in-delay">
            Aspiring web developer passionate about building modern, user-centered web applications. Welcome to my portfolio!
          </p>
          <div className="flex gap-4 justify-center pt-4 animate-fade-in-delay-2">
            <Button size="lg" className="text-base bg-primary-600 text-white font-semibold shadow-lg hover:bg-primary-700 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2" asChild>
              <a href="/projects">View My Projects</a>
            </Button>
            <Button variant="outline" size="lg" className="text-base border-white text-white hover:bg-primary-600 hover:text-white font-semibold focus:ring-2 focus:ring-primary-400 focus:ring-offset-2" asChild>
              <a href="/contact">Contact Me</a>
            </Button>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-8 w-full max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {/* JavaScript */}
            <div className="flex flex-col items-center text-center ">
              <span className="font-semibold text-2xl text-white flex flex-col items-center">
                <img src="/javascript.svg" alt="JavaScript" className="w-24 h-24 mb-4 rounded-md" />
                JavaScript
              </span>
            </div>
            {/* TypeScript */}
            <div className="flex flex-col items-center text-center ">
              <span className="font-semibold text-2xl text-white flex flex-col items-center">
                <img src="/typescript.svg" alt="TypeScript" className="w-24 h-24 mb-4 rounded-md" />
                TypeScript
              </span>
            </div>
            {/* React */}
            <div className="flex flex-col items-center text-center ">
              <span className="font-semibold text-2xl text-white flex flex-col items-center">
                <img src="/react.svg" alt="React" className="w-24 h-24 mb-4 rounded-md" />
                React
              </span>
            </div>
            {/* Next.js */}
            <div className="flex flex-col items-center text-center ">
              <span className="font-semibold text-2xl text-white flex flex-col items-center">
                <img src="/nextround.svg" alt="Next.js" className="w-24 h-24 mb-4" />
                Next.js
              </span>
            </div>
            {/* Tailwind CSS */}
            <div className="flex flex-col items-center text-center ">
              <span className="font-semibold text-2xl text-white flex flex-col items-center">
                <img src="/tailwind.svg" alt="Tailwind CSS" className="w-24 h-24 mb-4" />
                Tailwind CSS
              </span>
            </div>

          </div>
        </section>

        {/* AI Tools Section */}
        <section className="py-8 w-full max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">AI Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {/* OpenAI */}
            <div className="flex flex-col items-center text-center ">
              <span className="font-semibold text-2xl text-white flex flex-col items-center">
                <img src="/openai.png" alt="OpenAI" className="w-24 h-24 mb-4 rounded-md" />
                OpenAI
              </span>
            </div>
            {/* Claude */}
            <div className="flex flex-col items-center text-center ">
              <span className="font-semibold text-2xl text-white flex flex-col items-center">
                <img src="/claude.svg" alt="Claude" className="w-24 h-24 mb-4 rounded-md" />
                Claude
              </span>
            </div>
            {/* Windsurf */}
            <div className="flex flex-col items-center text-center ">
              <span className="font-semibold text-2xl text-white flex flex-col items-center">
                <img src="/windsurf.svg" alt="Windsurf" className="w-24 h-24 mb-4 rounded-md" />
                Windsurf
              </span>
            </div>
            {/* Add more AI tools here if desired */}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>
          <div className="flex flex-col gap-8 w-full max-w-[75vw] mx-auto">
            <Card className="border-2 border-primary-600 rounded-2xl shadow-xl hover:scale-[1.02] hover:shadow-2xl transition group overflow-hidden bg-card">
              <CardHeader>
                <CardTitle className="font-mono tracking-tight text-primary-600 group-hover:text-primary-500">Data Visualization</CardTitle>
                <CardDescription className="text-black">Personal portfolio built with Next.js & Tailwind CSS</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full rounded-lg overflow-hidden border border-primary-500 bg-black mb-4" style={{minHeight:'400px'}}>
                  <iframe
                    src="https://data-visualization-ajq.vercel.app/"
                    title="Live Data Visualization App"
                    className="w-full h-[400px] md:h-[600px] border-none rounded-lg"
                    allowFullScreen
                  />
                </div>
                <p className="text-medium-contrast mb-2 text-black">
                  This very site! Designed to showcase my skills, projects, and experience as a web developer.
                </p>
                <a href="/projects" className="inline-block mt-2 px-4 py-2 rounded bg-primary-600 text-white font-semibold shadow hover:bg-primary-700 transition">View Projects</a>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary-600 rounded-2xl shadow-xl hover:scale-[1.02] hover:shadow-2xl transition group overflow-hidden bg-card">
              <div className="h-40 w-full bg-gradient-to-br from-primary-700 to-black flex items-center justify-center">
                <span className="text-white text-4xl font-bold opacity-60">IMG</span>
              </div>
              <CardHeader>
                <CardTitle className="font-mono tracking-tight text-primary-600 group-hover:text-primary-500">AI Q/A</CardTitle>
                <CardDescription className="text-black">A modern e-commerce demo app with product listings, cart, and checkout flow.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-medium-contrast mb-2 text-black">
                  Built with React, Next.js, and Stripe integration. Focused on performance and user experience.
                </p>
                <a href="/projects" className="inline-block mt-2 px-4 py-2 rounded bg-primary-600 text-white font-semibold shadow hover:bg-primary-700 transition">View Projects</a>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary-600 rounded-2xl shadow-xl hover:scale-[1.02] hover:shadow-2xl transition group overflow-hidden bg-card">
              <div className="w-full rounded-lg overflow-hidden border border-primary-500 bg-black mb-4" style={{minHeight:'400px'}}>
                <iframe
                  src="https://anthony-quispilaya-is-117-003-project.vercel.app/"
                  title="Live Static Website Project"
                  className="w-full h-[400px] md:h-[600px] border-none rounded-lg"
                  allowFullScreen
                />
              </div>
              <CardHeader>
                <CardTitle className="font-mono tracking-tight text-primary-600 group-hover:text-primary-500">Static Website</CardTitle>
                <CardDescription className="text-black">A full-featured blog platform with markdown support and comments.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-medium-contrast mb-2 text-black">
                  Features user authentication, post creation, and responsive design using Next.js and Tailwind CSS.
                </p>
                <a href="/projects" className="inline-block mt-2 px-4 py-2 rounded bg-primary-600 text-white font-semibold shadow hover:bg-primary-700 transition">View Projects</a>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
