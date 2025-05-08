
import React from "react";

interface PortfolioItemProps {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ id, title, category, image, description }) => {
  return (
    <div 
      key={id} 
      className="group relative overflow-hidden rounded-lg aspect-square animate-on-load opacity-0"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
        <span className="text-sm uppercase tracking-wider mb-1 text-primary">
          {category}
        </span>
        <h3 className="font-heading text-2xl mb-2">{title}</h3>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
