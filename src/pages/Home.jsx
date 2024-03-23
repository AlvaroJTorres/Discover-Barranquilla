import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Link to={"TouristicAttractions"}>Touristic Attractions</Link>
    </>
  )
}