import Input2 from '../../components/inputs';
import './Price.css';

const Price = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title price-title">Year</h2>
        <select onChange={handleChange} name="price" id="price">
        <Input2
          handleChange={handleChange}
          value=''
          title="All"
          name="test2"
        />

        <Input2
          handleChange={handleChange}
          value={1996}
          title="1996"
          name="test2"
        />

        <Input2
          handleChange={handleChange}
          value={2008}
          title="2008"
          name="test2"
        />

        <Input2
          handleChange={handleChange}
          value={2010}
          title="2010"
          name="test2"
        />

        <Input2
          handleChange={handleChange}
          value={2024}
          title="2024"
          name="test2"
        />
        </select>
      </div>
    </>
  );
};

export default Price;