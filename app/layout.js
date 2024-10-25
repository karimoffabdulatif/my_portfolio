import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "Abdulatif Karimov",
  description: "Abdulatif Karimov portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900">
        <Header />
        <hr className="opacity-10"/>
   
       <main>
          {children}
        </main>

      </body>
    </html>
  );
}
