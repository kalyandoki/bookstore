import Course from "../components/Course";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function courses() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </div>
  );
}

export default courses;
