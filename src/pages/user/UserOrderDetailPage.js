import UserOrderDetailPageComponent from "./components/UserOrderDetailPageComponent";

import { getOrderById } from "../../service/orderService";

function UserOrderDetailPage() {
  return (
    <>
      <UserOrderDetailPageComponent getOrderById={getOrderById} />
    </>
  );
}

export default UserOrderDetailPage;
