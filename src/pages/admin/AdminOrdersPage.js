import { Table, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
import { useEffect, useState } from "react";
import { getOrdersAdmin } from "../../service/orderService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logoutState } from "../../redux/actions/userActions";
import AdminOrdersPageComponent from "./components/AdminOrdersPageComponent";

function AdminOrdersPage() {
  return <AdminOrdersPageComponent />;
}

export default AdminOrdersPage;
