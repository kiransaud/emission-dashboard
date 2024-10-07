import "./Products.css";

const Products = ({ result }) => {
  return (
    <>
      {/* <section className="card-container">{result}</section> */}
      
      <div className="table-container">
      <table role="table" className="table">
      <thead className="table-header">
        <tr role="row" className="table-header-row">
          <th role="columnheader" className="key-heading">Product Name</th>
          <th role="columnheader" className="key-heading">Emission Quantity</th>
          <th role="columnheader" className="key-heading">Emission Quantity Units</th>
          <th role="columnheader" className="key-heading">Pollutant</th>
          <th role="columnheader" className="key-heading">Year Recorded</th>
          <th role="columnheader" className="key-heading">Additional Information</th>
          <th role="columnheader" className="key-heading">Technical Reference</th>
          </tr>
      </thead>
      <tbody>
        {result}
      </tbody>
      </table>
      </div>
    </>
  );
};

export default Products;
