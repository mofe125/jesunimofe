
import React from "react";
import PortfolioItem from "./PortfolioItem";

export interface PortfolioItemType {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface PortfolioGridProps {
  items: PortfolioItemType[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <PortfolioItem 
          key={item.id}
          id={item.id}
          title={item.title}
          category={item.category}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default PortfolioGrid;
