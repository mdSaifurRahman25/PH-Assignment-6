import Banner from "@/components/homepage/Banner";
import Footer from "@/components/homepage/Footer";
import Workouts from "@/components/homepage/Workout";

export default function Home() {
  return (
    <div>
      <Banner />
      <Workouts />
      <Footer />
    </div>
  );
}
