import "./globals.css";

export const metadata = {
  title: "Road House Seeduwa | The Food District",
  description: "Seeduwa's premier food complex featuring Street Food, Cafe, Karaoke, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#18181b] text-white antialiased">
        {children}
      </body>
    </html>
  );
}