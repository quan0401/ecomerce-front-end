import { useDispatch, useSelector } from "react-redux";

import { getProductById, updateProductApi } from "../../service/productService";

import { useParams } from "react-router-dom";

import AdminEditProductPageComponent from "./components/AdminEditProductPageComponent";

import { createNewAttrForCate } from "../../redux/actions/categoryActions";

import { useEffect, useState } from "react";

function AdminEditProductPage() {
  const dispatch = useDispatch();

  const { id: productId } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(productId)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  const { categories } = useSelector((state) => state.category);

  return (
    <>
      {product && (
        <AdminEditProductPageComponent
          categories={categories}
          getProductById={getProductById}
          product={product}
          updateProductApi={updateProductApi}
          reduxDispatch={dispatch}
          createNewAttrForCate={createNewAttrForCate}
        />
      )}
    </>
  );
}

export default AdminEditProductPage;
