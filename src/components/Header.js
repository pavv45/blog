import React from 'react'

function Header() {
  return (
    <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}/>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-6 py-16 relative">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-center md:text-left">
          Blogs Personal
        </h1>
        <p className="text-blue-50 text-lg md:text-xl max-w-2xl text-center md:text-left leading-relaxed">
          Explora las historias y experiencias de nuestros autores
        </p>
      </div>

      {/* Decoración sutil en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/20 to-white/0"/>
    </header>
  );
}

export default Header