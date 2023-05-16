import { useDispatch, useSelector } from "react-redux";

import {
  getProductById,
  updateProductApi,
  deleteProductImage,
} from "../../service/productService";

import { useParams } from "react-router-dom";

import AdminEditProductPageComponent from "./components/AdminEditProductPageComponent";

import { createNewAttrForCate } from "../../redux/actions/categoryActions";

import { useEffect, useState } from "react";

function AdminEditProductPage() {
  const dispatch = useDispatch();

  const [deleteImage, setDeleteImage] = useState(false);

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
  }, [productId, deleteImage]);

  const deleteImageHandler = async (imagePath, productId) => {
    const result = await deleteProductImage(productId, imagePath);
    setDeleteImage((prev) => !prev);
  };

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
          deleteProductImageHandler={deleteImageHandler}
        />
      )}
    </>
  );
}

export default AdminEditProductPage;
