import Category from "./Category/Category";
import Price from "./Price/Prices";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import ComLogo from '../assets/onlineshop.jpg'

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
         <img src={ComLogo} alt="logo" className="logo-pic"/>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
