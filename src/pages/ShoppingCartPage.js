import ProductList from "../product-list/ProductList";
import * as productService from "../product-service";

function ShoppingCartPage() {
  return (
    <ProductList
      title="Shopping Cart"
      products={productService.listShoppingCart()}
      buttonText="remove"
      handleButtonClick={productService.removeFromShoppingCart}
    />
  );
}

export default ShoppingCartPage;
