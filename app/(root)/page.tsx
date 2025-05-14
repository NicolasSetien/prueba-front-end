import FlightSelector from "@/app/components/FlightSelector";
import ClassSelect from "@/app/components/ClassSelect";

export default function Home() {
  const classes = [
    {id: 1, name: "Economy", icon: "briefcase-2"},
    {id: 2, name: "Business", icon: "briefcase-filled"},
    {id: 3, name: "First-class", icon: "luggage"},
  ]

  return (
    <>
      <h1 className="text-3xl font-bold underline">Tal!!! :3</h1>
      <div className="hero_section">
        <h2 className="text-6xl">Con <span className="brand_name">Globetrotter,</span> llega a donde sea</h2>
        <p className="text-3xl leading-10">Acércate al viaje de tus sueños con nuestras tarifas competitivas.</p>
      </div>
      <div className="flex justify-center items-center my-8 mx-20">
        <FlightSelector />
      </div>
      <div className="flex justify-center items-center my-8 mx-20 gap-4">
        {classes.map((travelClass) => (
          <ClassSelect travelClass={travelClass} key={travelClass.id} />
        ))}
      </div>
    </>
  );
}
