import Constants from "../../api/Constants";

const Product = (props) => {

    const [_id, productName, unit, price, mrp, image] = props.data;
  return (
    <>
      <div class="col-sm-6">
        <div class="card">
            <img src={Constants.IMAGE_URL + image} className="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">{productName}</h5>
            <p class="card-text">
              {unit}
            </p>
            <h2>
                <span>&#8377;</span> {price}
                <span style={{fontSize: "22px", marginLeft: "10px", color: "#888"}}>
                    <del>
                        {" "}
                        <span>&#8377;</span> {mrp}
                    </del>
                </span>
            </h2>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
