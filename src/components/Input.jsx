// import React from 'react'

// const Input = () => {
//   return (
//     <div>
//       <label htmlFor="" className="sidebar-label-container">
//           <input type="radio" name="test" />
//           <span className="checkmark"></span>All
//         </label>
//     </div>
//   )
// }

// export default Input;

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;
