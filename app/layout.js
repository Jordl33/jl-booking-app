import "./globals.css";

export const metadata = {
  title: "JLE Bookings",
  description: "Online booking system for J L Electrical Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-white/70 backdrop-blur-md shadow p-4 flex items-center justify-between">
          <div className="text-lg font-bold">[LOGO]</div>
          <nav>
            <ul className="flex gap-4">
              <li><a href="/" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">About</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
