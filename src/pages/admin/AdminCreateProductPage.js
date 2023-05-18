import AdminCreateProductPageComponent from "./components/AdminCreateProductPageComponent";

import { useDispatch, useSelector } from "react-redux";

import { createNewAttrForCate } from "../../redux/actions/categoryActions";

import instance from "../../axios/setup";

import {
  uploadImageApi,
  createProductApi,
  uploadImageToCloudinary,
} from "../../service/productService";

function AdminCreateProductPage() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);

  return (
    <AdminCreateProductPageComponent
      categories={categories}
      createNewAttrForCate={createNewAttrForCate}
      uploadImageApi={uploadImageApi}
      reduxDispatch={dispatch}
      createProductApi={createProductApi}
    />
  );
}

export default AdminCreateProductPage;
