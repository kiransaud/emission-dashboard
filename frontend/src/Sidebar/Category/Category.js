import "./Category.css";
import Input2 from '../../components/inputs';
import logo from "../../assets/impactos.png"; // Ensure this path is correct

function Category({ handleChange }) {
  return (
    <div>
      <h2 style={{ marginTop: 80 }}className="sidebar-title">Pollutant</h2>
      <div>
        <select onChange={handleChange} name="category" id="category">
        <Input2
          handleChange={handleChange}
          value=""
          title="All"
          name="test"
        />
        <Input2
          handleChange={handleChange}
          value="METHANE"
          title="Methane"
          name="test"
        />
        <Input2
          handleChange={handleChange}
          value="CO2"
          title="CO2"
          name="test"
        />
        </select>
      </div>
    </div>
  );
}

export default Category;