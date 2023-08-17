import { Inter } from "next/font/google";
import { Login } from "./components/Login";
import { NavBar } from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      
      <Login />
    </main>
  );
}
