export default function Dashboard() {
    const stats = [
        { label: "Active Users", value: "1,238" },
        { label: "New Orders", value: "57" },
        { label: "Server Load", value: "43%" },
    ];

    const activities = [
        { user: "admin", action: "Updated stock", time: "2m ago" },
        { user: "not-admin", action: "Deleted product", time: "12m ago" },
        { user: "friends-of-admin", action: "Added new order", time: "30m ago" },
    ];

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono px-6 py-10 animate-slideRight">

            <header className="mb-10 border-b border-zinc-800 pb-4 animate-fadeIn">
                <h1 className="text-3xl font-bold text-blue-500">Dashboard</h1>
                <p className="text-zinc-400 text-sm mt-1">Welcome back, commander 🧠</p>
            </header>

            {/* Stats Section */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="bg-zinc-900/60 border  border-zinc-800 rounded-xl p-6 backdrop-blur-sm 
                       shadow-md hover:shadow-blue-900/20 hover:scale-[1.02] transition-all duration-300"
                    >
                        <p className="text-zinc-400 text-sm">{stat.label}</p>
                        <p className="text-2xl font-semibold text-blue-400 mt-1">{stat.value}</p>
                    </div>
                ))}
            </section>


            <section
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 backdrop-blur-sm animate-fadeIn"
                style={{ animationDuration: "0.8s" }}
            >
                <h2 className="text-lg font-semibold text-blue-400 mb-4">Recent Activity</h2>
                <table className="w-full text-sm border-collapse">
                    <thead className="border-b border-zinc-800 text-zinc-400">
                        <tr>
                            <th className="py-2 text-left">User</th>
                            <th className="py-2 text-left">Action</th>
                            <th className="py-2 text-left">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities.map((row, i) => (
                            <tr
                                key={i}
                                className="border-b border-zinc-800 hover:bg-zinc-900/70 transition-colors"
                            >
                                <td className="py-2 text-zinc-400">{row.user}</td>
                                <td className="py-2 text-zinc-300">{row.action}</td>
                                <td className="py-2 text-zinc-500">{row.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </main>
    );
}
