import Banner from "@/components/homepage/Banner";
import Footer from "@/components/homepage/Footer";
import Workout from "./workouts/page";




export default function Home() {
  return (
    <div>
      <Banner />
      <Workout />
    </div>
  );
}
