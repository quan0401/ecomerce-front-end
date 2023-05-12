import ProductListPageComponent from "./components/ProductListPageComponent";

import { getProductsApi } from "../service/productService";

function ProductListPage() {
  return <ProductListPageComponent getProductsApi={getProductsApi} />;
}

export default ProductListPage;
