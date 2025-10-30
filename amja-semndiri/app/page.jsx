const data = [
    {
        img: "/img/aja1.jpg",
        title: "Services",
        description:
            "Our services include web development, mobile app development, and digital marketing.",
    },
    {
        img: "/img/aja2.jpg",
        title: "Partnerships",
        description:
            "We partner with leading tech companies to deliver the best solutions to our clients.",
    },
    {
        img: "/img/aja3.png",
        title: "Our Team",
        description:
            "Our team consists of experienced professionals dedicated to delivering high-quality results.",
    },
    {
        img: "/img/aja4.jpeg",
        title: "Responsibility",
        description:
            "We are committed to corporate social responsibility and sustainable business practices.",
    },
];

export default function Home() {
    return (
        <main className="flex flex-col gap-20 px-6 py-10 bg-zinc-950 text-zinc-100 font-mono">

            <section className="text-center space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
                    Amja Semndiri Corporation.
                </h1>
                <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
                    Building digital ecosystems that empower innovation, sustainability,
                    and growth — one line of code at a time.
                </p>
            </section>

            <section>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`${index % 2 === 0 ? "animate-slideRight" : "animate-slideLeft"
                            } mb-10 p-5 border border-zinc-800 rounded-lg shadow-lg 
              bg-zinc-900/60 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
                        style={{
                            animationDuration: "1s",
                            animationFillMode: "both",
                            animationDelay: `${index * 0.2}s`,
                        }}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <img
                                className="w-64 h-64 object-cover rounded-md border border-zinc-800"
                                src={item.img}
                                alt={item.title}
                            />
                            <div>
                                <h2 className="text-xl font-semibold text-blue-400 mb-2">
                                    {item.title}
                                </h2>
                                <p className="text-zinc-300">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>


            <section className="max-w-3xl mx-auto text-center space-y-4">
                <h2 className="text-2xl font-semibold text-blue-400">Our Vision</h2>
                <p className="text-zinc-400 leading-relaxed">
                    We aim to redefine digital transformation by integrating technology
                    and human-centered design. Our vision is to make technology invisible,
                    intuitive, and impactful — serving not just industries, but people.
                </p>
            </section>


            <section className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
                    Achievements & Milestones
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            number: "120+",
                            label: "Projects Delivered",
                        },
                        {
                            number: "30+",
                            label: "Trusted Partners",
                        },
                        {
                            number: "10 Years",
                            label: "Industry Experience",
                        },
                        {
                            number: "99.8%",
                            label: "Client Satisfaction",
                        },
                        {
                            number: "24/7",
                            label: "Technical Support",
                        },
                        {
                            number: "∞",
                            label: "Ideas in Motion",
                        },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 text-center
                         hover:shadow-md hover:shadow-blue-900/20 transition-all duration-300"
                        >
                            <p className="text-3xl font-bold text-blue-400">{stat.number}</p>
                            <p className="text-zinc-400 text-sm mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="text-center max-w-3xl mx-auto bg-zinc-900/60 border border-zinc-800 rounded-xl py-10 px-6 backdrop-blur-sm shadow-lg">
                <h2 className="text-2xl font-semibold text-blue-400 mb-3">
                    Ready to collaborate?
                </h2>
                <p className="text-zinc-300 mb-6">
                    Join us in shaping the future of digital innovation. We’re open to
                    partnerships, projects, and opportunities that make an impact.
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-semibold
                     hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all"
                >
                    Get in Touch
                </a>
            </section>


            <p className="text-xs">
                secrets are here: <span className="text-zinc-950">rebecca</span>
            </p>
        </main>
    );
}
