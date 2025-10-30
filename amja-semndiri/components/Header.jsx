const data = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-900/70 backdrop-blur-md">
            <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">

                <div className="text-sm md:text-base font-bold tracking-tight text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="text-lime-600">stop_gooning</span>@jmk<span className="text-zinc-500">:</span>~/tools
                </div>


                <div className="flex gap-3 md:gap-5">
                    {data.map((item, index) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-xs md:text-sm uppercase tracking-wider text-zinc-300 hover:text-blue-400 transition-all duration-200 hover:-translate-y-[1px] animate-pulse" style={{
                                animationFillMode: "forwards", animationIterationCount: 1,
                                animationDelay: `${index * 0.1 + 0.3}s`,
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    )
}