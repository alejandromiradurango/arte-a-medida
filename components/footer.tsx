import Link from "next/link"
import { Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2D3E50] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Arte a Medida</h3>
            <p className="text-gray-300 mb-4">
              Transformamos tus ideas en obras de arte únicas. Colaboramos contigo y con artistas emergentes para crear
              piezas exclusivas.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/semana-a-semana" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Semana a Semana
                </Link>
              </li>
              <li>
                <Link href="/noticias-tips" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Noticias/Tips
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-[#D4AF37]" />
                <span className="text-gray-300">info@arteamedida.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-[#D4AF37]" />
                <span className="text-gray-300">+34 123 456 789</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-playfair text-lg font-bold mb-2">Síguenos</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#D4AF37] transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#D4AF37] transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Arte a Medida. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

