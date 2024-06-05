import { useState } from "react";
import Center from "./Center";
import Left from "./Left";
import Right from "./Right";

const Home = () => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="flex justify-center gap-10 mt-10">
      <Left onLogout={handleLogout} />
      <Center />
      <Right />
    </div>
  );
};
export default Home;
