import { Sparkles, ArrowUpRight } from "lucide-react";
import HTag from "../../components/HTag";
import Nav from "../../components/Nav";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import services from "@/utils/services";

export default function Landing() {
  return (
    <main className="bg-background-alt">
      <Nav />
      <section className="max-w-[1280px] mx-6 lg:mx-auto py-20 flex gap-20">
        <div>
          <HTag className="mb-4">Nous sommes ANC Clean</HTag>
          <h1 className="mb-10 text-5xl">
            Sentez votre chemin vers la fraîcheur
          </h1>
          <p className="max-w-[45ch]">
            Découvrez la quintessence de la propreté avec clino, nous
            fournissons des services de nettoyage haut de gamme adaptés à vos
            besoins, garantissant que vos espaces brillent à la perfection.
          </p>
          <a href="#services">
            <Button className="p-2 h-max text-md my-10 rounded-full">
              <p className="ml-6">NOS SERVICES</p>
              <div className="ml-6 w-12 aspect-square rounded-full bg-blue-950 flex justify-center items-center">
                <Sparkles className="text-primary" />
              </div>
            </Button>
          </a>
        </div>
        <div className="w-96 hidden md:block">
          <img src="src/assets/hero.png" />
        </div>
      </section>
      <section className="bg-white">
        <div id="services" className="max-w-[1280px] mx-10 lg:mx-auto py-20">
          <HTag className="mb-5">Nos services</HTag>
          <div className="flex justify-between">
            <h1 className="text-4xl">Élevez votre espace avec notre service</h1>
            <Link to="/services">
              <HTag className="rounded-full py-2 px-5 flex items-center">
                <p>Plus</p>
                <ArrowUpRight />
              </HTag>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center my-10 gap-x-10 gap-y-6">
            {services.map(
              (service, idx) =>
                idx < 3 && (
                  <Link to={"/services/" + service.link} key={idx}>
                    <div className="relative max-w-80 lg:max-w-96 w-max aspect-square rounded-md bg-white overflow-hidden group hover:cursor-pointer">
                      <img
                        src={`src/assets/${service.name}.jpg`}
                        className="h-4/5 w-full rounded-md object-cover"
                      />
                      <div className="w-full h-1/5 flex items-center px-8 justify-between text-gray-600">
                        <h4 className="group-hover:text-primary duration-100">
                          {service.name}
                        </h4>
                        <div className="flex items-center justify-center w-10 aspect-square rounded-full bg-white group-hover:bg-primary group-hover:shadow-lg group-hover:text-white duration-100">
                          <ArrowUpRight />
                        </div>
                      </div>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
