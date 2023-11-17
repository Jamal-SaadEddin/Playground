import { useParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();

  return <p>User {params.id}</p>;
};

export default UserDetail;
