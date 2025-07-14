import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // Exemplo de ícone, ajuste conforme sua biblioteca
import { Button } from '../ui/button';

// Array de imagens para o slider. Substitua pelos caminhos das suas imagens.
const sliderImages = [
  'https://th.bing.com/th/id/R.5b0a312a951831a77cf7e3fb08f1c087?rik=DTgGGgb1z94KVA&pid=ImgRaw&r=0',
  'https://ogesseiro.com.br/wp-content/uploads/2024/03/d6701f85-7e0b-41bc-bcd0-3a639b115d15.jpg',
  'https://img.olx.com.br/images/15/157514761381512.jpg',
  'https://impactagesso.com/wp-content/uploads/2023/04/SANCA-DE-GESSO-1-1-2.jpg',
];

// Componente do Slider Automático
const AutoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Altera a imagem a cada 5 segundos
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    // Limpeza do intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-2xl">
      {sliderImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}
          `}
        />
      ))}
    </div>
  );
};

// Componente da Sessão completa
const SliderSection = () => {
  return (
    <section className="md:block py-20 bg-gray-800 ">
      <div className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-2xl">
  {/* O Slider que agora ocupa toda a área de fundo */}
  <AutoSlider />

  {/* Gradiente escuro para melhorar a legibilidade do texto */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

  {/* O Conteúdo (texto e botão) que fica no canto inferior esquerdo */}
  <div className="absolute bottom-0 left-0 w-full lg:w-1/2 p-6 lg:p-10 z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
        Nossa Galeria de Obras
      </h2>
      <p className=" hidden md:block text-xl text-gray-200 mb-8 leading-relaxed">
        Confira alguns de nossos trabalhos mais recentes em gesso e drywall.
        Qualidade, design e inovação em cada detalhe.
      </p>
    </motion.div>
  </div>
</div>
    </section>
  );
};

export default SliderSection;