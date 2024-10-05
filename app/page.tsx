import Image from "next/image";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Vision />
      <Events />
      <Testimonials />
      
    </div>
  );
}
