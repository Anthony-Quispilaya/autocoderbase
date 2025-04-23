export default function Contact() {
  return (
    <div className="flex justify-center items-center min-h-[70vh] px-4">
      <div className="bg-card border-2 border-primary-600 rounded-2xl shadow-xl w-full max-w-xl p-10">
        <h1 className="text-4xl font-mono font-bold mb-2 text-primary-600">Contact</h1>
        <p className="text-lg mb-8 text-black">Feel free to reach out for collaborations or just a friendly hello!</p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold text-black">Name</label>
            <input id="name" type="text" placeholder="Your Name" className="w-full" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-black">Email</label>
            <input id="email" type="email" placeholder="Your Email" className="w-full" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-semibold text-black">Message</label>
            <textarea id="message" placeholder="Your Message" className="w-full" rows={5} required />
          </div>
          <button type="submit" className="w-full bg-primary-600 text-white px-6 py-3 rounded font-bold shadow hover:bg-primary-700 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 transition">Send Message</button>
        </form>
      </div>
    </div>
  );
}
