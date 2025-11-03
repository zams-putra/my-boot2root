import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

export default function Layout({ children }) {
    return (
        <html>
            <head>
                <title>Amja Semndiri</title>
            </head>
            <body>
                <section className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 font-mono">
                    <Header />
                    <main className="flex-1 overflow-hidden flex items-center justify-center px-6 py-10">
                        <div className="max-w-2xl w-full" style={{ animationDuration: "0.6s" }}>
                            {children}
                        </div>
                    </main>
                    <Footer />
                </section>
            </body>
        </html>
    );
}



