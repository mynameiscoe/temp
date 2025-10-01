import HomePage from "@/pages/HomePage";
import NavBar from "../components/NavBar";
import StarCanvas from "@/essentials/StarCanvas";

export default function Home() {
  return (
    <div className="relative">
      <StarCanvas />
      <NavBar />
      <main className="pt-20 mx-18 ">
        <HomePage />
      </main>
    </div>
  );
}
