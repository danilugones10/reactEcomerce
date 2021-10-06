import ProductList from "../product-list/ProductList";
import * as productService from "../product-service";
import {Link} from "react-router-dom";
import './ProductsPage.css';

function ProductsPage() {
  return (
    <div className="products">
      <ProductList
        title="Products"
        products={productService.list()}
        buttonText="add to shopping cart"
        handleButtonClick={productService.addToShoppingCart}
      />
      <Link className="float-button"  to="/create-product">
        <span className="material-icons">
          add
        </span>
      </Link>
    </div>
  );
}

export default ProductsPage;
