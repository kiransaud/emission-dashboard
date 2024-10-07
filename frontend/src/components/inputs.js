
        // const Input2 = ({ handleChange, value, title, name, color }) => {
        //     return (
        //       <label className="sidebar-label-container">
        //         <input onChange={handleChange} type="radio" value={value} name={name} />
        //         <span className="checkmark" style={{ backgroundColor: color }}></span>
        //         {title}
        //       </label>
        //     );
        //   };

        const Input3 = ({ handleChange, value, title, name, color}) => {
          return (
            <option value={value}>{title}</option>
          )
        }
          
          export default Input3;
