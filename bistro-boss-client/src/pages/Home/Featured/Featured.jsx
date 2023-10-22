import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-20 bg-fixed">
      <SectionTitle heading={"Featured Item"} subHeading={"Check it out"} />
      <div className="flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500  bg-opacity-30">
        <div>
          <img src={featuredImg} alt="featured image" />
        </div>
        <div className="md:ml-10">
          <p>December 20, 2023</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum sed
            omnis debitis impedit dolores quaerat. Cum repellendus sunt aliquid
            fuga, similique laborum id vitae optio molestiae fugiat quo
            voluptatem in magnam consequatur labore alias. Nesciunt laudantium
            quia, unde animi iure a odit nostrum? Explicabo aperiam aliquam unde
            aliquid iusto id.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
