/**
 * import "../styles/Products.css";
.products-container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
const Task = (params) => {// => args
  return <p>{params.task}</p>;
};

const Products = () => {
  const tasks = [
    "Saat 12:00'da React çalış.",
    "Saat 16:00'da JavaScript çalış.",
    "Saat 18:00'da Products componentini geliştir.",
    "Saat 20:00'da yemek sipariş ver.",
    "Saat 22:00'da React tekrarı yap.",
  ];
  return (
    <section className="products-container">
      <h3>Yapılacaklar</h3>
      {tasks.map((task) => { // Saat 14:00 ....
        return <Task task={task} />;//<p>Saat 14:00 ....</p>
      })}
    </section>
  );
};

export default Products;
 */
import "../styles/Products.css";
import ProductsCard from "./ProductsCard";
import card1 from "../assets/images/products-card/card-1.png";
import card2 from "../assets/images/products-card/card-2.png";
import card3 from "../assets/images/products-card/card-3.png";
import card4 from "../assets/images/products-card/card-4.png";
import card5 from "../assets/images/products-card/card-5.png";

const ProductsHeader = () => {
  return (
    <div className="products-header">
      <h4>Featured Products</h4>
      <h3>BESTSELLER PRODUCTS</h3>
      <p>Problems trying to resolve the conflict between </p>
    </div>
  );
};

const ProductsContent = () => {
  return (
    <div className="products-content">
      <div className="products-wrapper">
        <ProductsCard image={card1} />
        <ProductsCard image={card2} />
        <ProductsCard image={card3} />
        <ProductsCard image={card4} />
        <ProductsCard image={card5} />
        <ProductsCard image={card3} />
        <ProductsCard image={card1} />
        <ProductsCard image={card2} />
        <ProductsCard image={card5} />
        <ProductsCard image={card4} />
      </div>
    </div>
  );
};
const Products = () => {
  return (
    <section className="products-container">
      <ProductsHeader />
      <ProductsContent />
    </section>
  );
};
export default Products;
