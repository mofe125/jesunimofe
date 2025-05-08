
import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import CategoryFilter from "../components/portfolio/CategoryFilter";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import { categories, portfolioItems } from "../data/portfolioData";
import { usePortfolioAnimation } from "../hooks/usePortfolioAnimation";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Use the animation hook
  usePortfolioAnimation();

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <PageLayout>
      {/* Portfolio Hero Section */}
      <PortfolioHero />

      {/* Portfolio Gallery Section */}
      <section className="py-16">
        <div className="container-custom">
          {/* Categories Filter */}
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Portfolio Grid */}
          <PortfolioGrid items={filteredItems} />
        </div>
      </section>
    </PageLayout>
  );
};

export default Portfolio;
