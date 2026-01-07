import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src="/images/logo.png" alt="Jô le Taxi" className="h-8 w-auto mb-4" />
            <p className="text-sm text-primary-foreground/80">{t.footer.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#a-propos" className="hover:text-accent transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-accent transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#horaires" className="hover:text-accent transition-colors">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+41783223696" className="hover:text-accent transition-colors">
                  +41 78 322 36 96
                </a>
              </li>
              <li>
                <a href="mailto:Jo.le.taxi2024@gmail.com" className="hover:text-accent transition-colors">
                  Jo.le.taxi2024@gmail.com
                </a>
              </li>
              <li className="text-sm opacity-80">Route des Paccots 238</li>
              <li className="text-sm opacity-80">1619 Les Paccots, CH</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
            <p>
              © 2024 Jô le Taxi. {t.footer.copyright}
            </p>
            <p className="mt-4 md:mt-0">
              {t.footer.tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
