import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function about() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-col flex-1">
        <p>A propos de nous</p>
      </div>

      <Footer />
    </div>
  );
}