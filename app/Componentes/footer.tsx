"use client"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <ul className="flex flex-col space-y-3 text-lg">
          <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Trabaja con nosotros</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Conócenos</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Atención al cliente</a></li>
        </ul>


        <div className="flex flex-col items-center">
          <img src="/logo.png" alt="logo" className="w-32 h-auto mb-4" />
          <p className="text-center text-sm text-gray-400">© 2025 Mi Empresa. Todos los derechos reservados.</p>
        </div>

        
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Síguenos</h3>
          <div className="flex space-x-4">
            <img src="/instagram.png" alt="instagram" className="w-8 h-8 hover:scale-110 transition-transform" />
            <img src="/facebook.png" alt="facebook" className="w-8 h-8 hover:scale-110 transition-transform" />
            <img src="/tiktok.png" alt="tiktok" className="w-8 h-8 hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </footer>
  );
}
