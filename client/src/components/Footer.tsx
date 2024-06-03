import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-background-alt">
      <div className="flex flex-wrap justify-center gap-16 py-20">
        <div className="[&>*]:mb-2">
          <div className="flex">
            <h2>Cleano</h2>
          </div>
          <p className="max-w-[35ch]">
            Nous travaillons dans de nombreux domaines pour nettoyer votre
            environnement et rendre votre vie plus confortable
          </p>
        </div>
        <div className="[&>*]:mb-2">
          <h4>Contact</h4>
          <div className="flex gap-2">
            <Mail />
            <p>cleano@email.com</p>
          </div>
          <div className="flex gap-2">
            <Phone />
            <p>+213 (0) 612345789</p>
          </div>
        </div>
        <div className="[&>*]:mb-2">
          <h4>Nos réseaux</h4>
          <Link to="https://facebook.com">
            <div className="flex gap-2 mb-2">
              <Facebook />
              <p>Facebook</p>
            </div>
          </Link>
          <Link to="https://instagram.com">
            <div className="flex gap-2">
              <Instagram />
              <p>Instagram</p>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
