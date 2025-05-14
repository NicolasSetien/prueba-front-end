import FlightSelector from "@/app/components/FlightSelector";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Tali!!! :3</h1>
      <div className="hero_section">
        <h2 className="text-6xl">Con <span className="brand_name">Globetrotter,</span> llega a donde sea</h2>
        <p className="text-3xl leading-10">Acércate al viaje de tus sueños con nuestras tarifas competitivas.</p>
      </div>
      <div className="flex justify-center items-center my-8 mx-20">
        <FlightSelector />
      </div>
    </>
  );
}
