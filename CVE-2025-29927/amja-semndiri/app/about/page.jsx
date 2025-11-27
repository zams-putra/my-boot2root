export default function About() {
    const team = [
        {
            name: "Atmin",
            role: "Chief Technology Officer",
            desc: "Leads innovation and oversees system architecture for our scalable digital products.",
            img: "/img/pp.jpeg",
        },
        {
            name: "Atmin2",
            role: "Head of Design",
            desc: "Focuses on creating seamless user experiences with modern, accessible UI principles.",
            img: "/img/pp.jpeg",

        },
        {
            name: "Atmin3",
            role: "Operations Manager",
            desc: "Ensures all projects meet deadlines while maintaining Amja’s commitment to quality.",
            img: "/img/pp.jpeg",
        },
    ];

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono px-6 py-10">

            <header className="mb-12 border-b border-zinc-800 pb-6 animate-fadeIn">
                <h1 className="text-3xl font-bold text-blue-500">About Amja Semndiri Corp.</h1>
                <p className="text-zinc-400 text-sm mt-2">
                    Innovating technology with purpose and passion.
                </p>
            </header>


            <section className="max-w-3xl mx-auto mb-16 animate-slideRight">
                <h2 className="text-2xl font-semibold text-blue-400 mb-4">Our Mission</h2>
                <p className="text-zinc-300 leading-relaxed">
                    At <span className="text-blue-400 font-semibold">Amja Semndiri Corporation</span>,
                    we believe in building digital ecosystems that empower people. Our mission is
                    to deliver solutions that blend technology, creativity, and sustainability —
                    ensuring long-term value for our clients and communities.
                </p>
            </section>

            {/* Team Section */}
            <section className="max-w-5xl mx-auto animate-slideLeft">
                <h2 className="text-2xl font-semibold text-blue-400 mb-8 text-center">Our Team</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <div
                            key={i}
                            className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 backdrop-blur-sm
                         hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300
                         flex flex-col items-center text-center"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-32 h-32 rounded-full object-cover mb-4 border border-zinc-700"
                            />
                            <h3 className="text-lg font-semibold text-blue-400">{member.name}</h3>
                            <p className="text-zinc-400 text-sm mb-2">{member.role}</p>
                            <p className="text-zinc-300 text-sm leading-relaxed">{member.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-16 text-center text-zinc-500 text-xs">
                &copy; {new Date().getFullYear()} Amja Semndiri Corporation. All rights reserved.
            </footer>
        </main>
    );
}
