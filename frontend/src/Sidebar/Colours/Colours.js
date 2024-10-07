import './Colours.css';
import Input2 from '../../components/inputs';

const Colors = ({handleChange}) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Units</h2>
        <select onChange={handleChange} name="colours" id="colours">
        {/* <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label> */}
        <Input2
          handleChange={handleChange}
          value=""
          title="All"
          name="test"
          color="all"
        />

        <Input2
          handleChange={handleChange}
          value="kg/cap/day"
          title="kg/cap/day"
          name="test1"
          color="kg/cap/day"
        />

        <Input2
          handleChange={handleChange}
          value="t/TJ"
          title="t/TJ"
          name="test1"
          color="t/TJ"
        />

        <Input2
          handleChange={handleChange}
          value="fraction"
          title="fraction"
          name="test1"
          color="fraction"
        />
        </select>
      </div>
    </>
  );
};

export default Colors;
