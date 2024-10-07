import "./Recommond.css"
import Button from "../components/buttons";
function Recommond({handleClick, length}){
    return(
        <>
      <div>
      <h2 className="recommended-title">Results Found</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Records" />
          <Button onClickHandler={handleClick} value="Waste pellets, Finland" title="Waste pellets, Finland" />
          <Button onClickHandler={handleClick} value="Fuel" title="Fuel" />
          <Button onClickHandler={handleClick} value="Waste" title="Waste" />
          <Button onClickHandler={handleClick} value="Industrial" title="Industrial" />
        </div>
        <h3 className="results-found">Number of Results Found: {length}</h3>
      </div>
    </>
    )
}
export default Recommond;