import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Asegúrate de tener tus estilos de Tailwind aquí

// 1. Selección del elemento raíz con validación limpia
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Error crítico: No se encontró el elemento 'root' en el DOM.");
}

// 2. Creación del renderizador de React 18
const root = ReactDOM.createRoot(rootElement);

// 3. Renderizado de la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);