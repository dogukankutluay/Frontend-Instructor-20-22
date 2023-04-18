const ProductsCard = (props) => {
  return (
    <div className="products-card">
      <img src={props.image} />
      <h5>Graphic Design</h5>
      <p>English Department</p>
      <h6>
        $16.48
        <span>$6.48</span>
      </h6>
    </div>
  );
};
export default ProductsCard;
