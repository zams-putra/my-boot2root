export default function Contact() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono px-6 py-10">

            <header className="mb-12 border-b border-zinc-800 pb-6 animate-fadeIn">
                <h1 className="text-3xl font-bold text-blue-500">Contact Us</h1>
                <p className="text-zinc-400 text-sm mt-2">
                    We’d love to hear from you — let’s build something amazing together.
                </p>
            </header>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                <div className="animate-slideRight space-y-6">
                    <h2 className="text-2xl font-semibold text-blue-400">Get in Touch</h2>
                    <p className="text-zinc-300 leading-relaxed">
                        Whether you’re looking for collaboration, project inquiries, or just want to
                        say hi — reach out anytime. Our team typically responds within 24 hours.
                    </p>

                    <div className="mt-6 space-y-3 text-sm text-zinc-400">
                        <p>
                            📍 <span className="text-zinc-300">Omke St. No. 42, Godvlan City</span>
                        </p>
                        <p>
                            📞 <span className="text-zinc-300">+62 812 3456 7890</span>
                        </p>
                        <p>
                            ✉️ <span className="text-zinc-300">contact@amja-corp.com</span>
                        </p>
                        <p>
                            🕒 <span className="text-zinc-300">Mon - Fri, 09:00 - 18:00</span>
                        </p>
                    </div>
                </div>


                <form
                    className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 backdrop-blur-sm
                     animate-slideLeft shadow-md hover:shadow-blue-900/10 transition-all duration-300
                     flex flex-col gap-4"
                >
                    <div>
                        <label className="block text-sm text-zinc-400 mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-3 py-2 
                         text-zinc-100 placeholder-zinc-600 focus:outline-none 
                         focus:ring-1 focus:ring-blue-500 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-zinc-400 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-3 py-2 
                         text-zinc-100 placeholder-zinc-600 focus:outline-none 
                         focus:ring-1 focus:ring-blue-500 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-zinc-400 mb-1">Message</label>
                        <textarea
                            placeholder="Type your message..."
                            rows="4"
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-3 py-2 
                         text-zinc-100 placeholder-zinc-600 focus:outline-none 
                         focus:ring-1 focus:ring-blue-500 transition resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="reset"
                        className="mt-2 bg-blue-600 text-white py-2 rounded-md font-semibold
                       hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all"
                    >
                        Send Message
                    </button>
                </form>
            </section>


            <footer className="mt-16 text-center text-zinc-500 text-xs">
                &copy; {new Date().getFullYear()} Amja Semndiri Corporation — Crafted with 💙 in Godvlan City.
            </footer>
        </main>
    );
}
