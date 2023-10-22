import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log("PopularMenu:", menu.length);
  return (
    <section>
      <>
        <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />
        <div className="grid md:grid-cols-2 gap-10">
          {menu.map((item) => (
            <MenuItem key={item?._id} item={item} />
          ))}
        </div>
      </>
      <button className="btn btn-outline border-0 border-b-4 mt-4">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
