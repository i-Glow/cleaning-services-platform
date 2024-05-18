import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="flex justify-center gap-20 py-20">
        <div className="[&>*]:mb-2">
          <div className="flex">
            <h2 className="text-primary">ANC</h2>
            <h2>Clean</h2>
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
            <p>ancclean@gmail.com</p>
          </div>
          <div className="flex gap-2">
            <Phone />
            <p>+213 (0) 798480836</p>
          </div>
        </div>
        <div className="[&>*]:mb-2">
          <h4>Nos resaux</h4>
          <div className="flex gap-2">
            <Facebook />
            <p>Facebook</p>
          </div>
          <div className="flex gap-2">
            <Instagram />
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
