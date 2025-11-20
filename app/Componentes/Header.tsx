"use client";
import React, { useState } from "react";

export default function Header() {
  function mostrarMensaje(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    alert("¡Botón clickeado!");
  }

  return (
    <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-6 shadow-lg">
      <nav className="flex justify-between items-center">
        
        <h1 className="text-2xl font-bold tracking-wide">Mini Sitio</h1>

        
        <div className="flex gap-10 text-2xl font-medium">
          <a className="hover:text-yellow-300 transition-colors cursor-pointer">Contacto</a>
          <a className="hover:text-yellow-300 transition-colors cursor-pointer">Conócenos</a>
          <a className="hover:text-yellow-300 transition-colors cursor-pointer">Trabaja</a>
          <a className="hover:text-yellow-300 transition-colors cursor-pointer">Productos</a>
        </div>
          <button
    onClick={mostrarMensaje}
    className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
  
    ¡Haz clic aquí!
  </button>

      </nav>
    </header>
  );
}