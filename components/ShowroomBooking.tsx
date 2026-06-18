import React from 'react';
import { ASSETS, COMPANY_INFO } from '../constants';
import Button from './Button';

const ShowroomBooking: React.FC = () => {
  const handleBooking = () => {
    window.open(`${COMPANY_INFO.whatsapp}?text=Hola,%20me%20gustaría%20agendar%20una%20visita%20al%20showroom.`, '_blank');
  };

  return (
    <section className="py-32 dark:bg-black bg-stone-900 relative overflow-hidden transition-colors duration-1000">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={ASSETS.showroom} 
          alt="Showroom" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 animate-fade-in-up">
           <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4 block animate-pulse">Exclusividad Presencial</span>
           <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
             Agenda una cita en el showroom.
           </h2>
           <p className="text-xl text-gray-300 max-w-xl font-light leading-relaxed mb-10">
             Vea, toque y experimente la tecnología Velux antes de decidir. 
             Nuestros expertos lo esperan para una demostración privada.
           </p>
           <Button onClick={handleBooking} variant="white" className="rounded-full px-10 py-4 font-bold text-lg bg-white text-black hover:bg-gray-200">
             Reserva tu Cita
           </Button>
        </div>
      </div>
    </section>
  );
};

export default ShowroomBooking;
