import "../styles/Products.css";

const Task = (params) => {
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
      {tasks.map((task) => {
        return <Task task={task} />;
      })}
    </section>
  );
};

export default Products;
