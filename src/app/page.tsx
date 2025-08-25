import HomePage from "@/pages/HomePage";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <main className="pt-100">
          <HomePage />
      </main>
    </div>

  );
}
