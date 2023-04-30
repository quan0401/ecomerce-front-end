import { Table, Container, Row, Col, Button } from "react-bootstrap";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
import { Link } from "react-router-dom";

const productList = [
  { name: "Panasonic", price: "200.000 VND", category: "TV" },
  {
    name: "Apple iPhone 12",
    price: "15.990.000 VND",
    category: "Mobile Phone",
  },
  {
    name: "Samsung Galaxy Watch 4",
    price: "7.690.000 VND",
    category: "Smart Watch",
  },
  {
    name: "Bose QuietComfort 35 II",
    price: "8.690.000 VND",
    category: "Headphones",
  },
  { name: "Nintendo Switch", price: "8.790.000VND", category: "Gaming" },
  { name: "Sony Alpha 6600", price: "46.990.000VND", category: "Camera" },
  {
    name: "Fitbit Charge 5",
    price: "4.590.000 VND",
    category: "Fitness Tracker",
  },
  { name: "iPhone 13", price: "21,990,000 VND", category: "Smartphones" },
  {
    name: "Samsung Galaxy S21",
    price: "16,990,000 VND",
    category: "Smartphones",
  },
  { name: "iPad Pro", price: "32,490,000 VND", category: "Tablets" },
  {
    name: "Microsoft Surface Laptop 4",
    price: "34,990,000 VND",
    category: "Laptops",
  },
  { name: "Dell XPS 13", price: "37,990,000 VND", category: "Laptops" },
  { name: 'LG OLED CX 55"', price: "34,990,000 VND", category: "TVs" },
  { name: 'Samsung QLED Q80A 65"', price: "54,990,000 VND", category: "TVs" },
  { name: "Sony WH-1000XM4", price: "6,990,000 VND", category: "Headphones" },
  {
    name: "Bose QuietComfort 35 II",
    price: "7,490,000 VND",
    category: "Headphones",
  },
  { name: "Canon EOS R5", price: "105,000,000 VND", category: "Cameras" },
  { name: "Sony Alpha a7 III", price: "59,990,000 VND", category: "Cameras" },
  {
    name: "Xiaomi Mi Electric Scooter Pro 2",
    price: "11,990,000 VND",
    category: "Transportation",
  },
  {
    name: "Segway Ninebot MAX G30LP",
    price: "15,490,000 VND",
    category: "Transportation",
  },
  {
    name: "Apple Watch Series 7",
    price: "16,490,000 VND",
    category: "Wearables",
  },
  { name: "Fitbit Versa 3", price: "5,990,000 VND", category: "Wearables" },
  {
    name: "Samsung Galaxy S21",
    price: "18,990,000 VND",
    category: "Smartphones",
  },
  { name: "Apple MacBook Air", price: "33,990,000 VND", category: "Laptops" },
  {
    name: "Sony Playstation 5",
    price: "14,490,000 VND",
    category: "Gaming Consoles",
  },
  { name: "LG OLED65C1PTB", price: "89,990,000 VND", category: "TVs" },
  {
    name: "Bose QuietComfort Earbuds",
    price: "7,990,000 VND",
    category: "Headphones",
  },
  { name: "DJI Mavic Air 2S", price: "22,990,000 VND", category: "Drones" },
  {
    name: "Microsoft Surface Pro 7",
    price: "29,990,000 VND",
    category: "Tablets",
  },
  { name: "Canon EOS R5", price: "102,490,000 VND", category: "Cameras" },
  {
    name: 'Samsung 55" The Frame QLED 4K',
    price: "28,490,000 VND",
    category: "TVs",
  },
  {
    name: "Apple Watch Series 6",
    price: "14,990,000 VND",
    category: "Watches",
  },
  {
    name: "Samsung Galaxy S21",
    price: "20,990,000 VND",
    category: "Smartphone",
  },
  {
    name: "ASUS ROG Zephyrus S17",
    price: "69,990,000 VND",
    category: "Laptop",
  },
  { name: "LG 55 inch 4K OLED TV", price: "30,990,000 VND", category: "TV" },
  { name: "Sony WH-1000XM4", price: "7,490,000 VND", category: "Headphone" },
  { name: "DJI Mavic Air 2", price: "21,990,000 VND", category: "Drone" },
  { name: "Nikon Z7 II", price: "86,990,000 VND", category: "Camera" },
  {
    name: "Apple iPad Pro 12.9-inch",
    price: "36,990,000 VND",
    category: "Tablet",
  },
  { name: "Bose Soundbar 700", price: "19,990,000 VND", category: "Speaker" },
  {
    name: "Fender Stratocaster Electric Guitar",
    price: "50,000,000 VND",
    category: "Musical Instrument",
  },
  {
    name: "Microsoft Xbox Series X",
    price: "14,990,000 VND",
    category: "Gaming Console",
  },
];

function AdminOrdersPage() {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={2}>
          <AdminLinksComponent />
        </Col>
        <Col md={10}>
          <h1>Product</h1>
          <Link to="/admin/create-new-product">
            <Button className="mb-3">Add product</Button>
          </Link>
          <Table bordered striped responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>

            <tbody>
              {productList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <div className=" d-flex ">
                      <Button className="mx-2" size="sm">
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                      <Button variant="danger" size="sm">
                        <i className="bi bi-trash2"></i>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminOrdersPage;
