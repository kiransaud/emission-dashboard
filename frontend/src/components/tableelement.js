const TableElement = ({ title, star, reviews, prevPrice, yearRecorded, newPrice, technicalReference }) => {
  return (
    <>
    <tr className="element-details">
        <td className="element-title">{title}</td>
        <td className="card-reviews">{star}</td>
        <td className="total-reviews">{reviews}</td>
        <td className="card-price">{prevPrice}</td>
        <td className="bag">{yearRecorded}</td>
        <td className="price">{newPrice}</td>
        <td className="bag">{technicalReference}</td>
    </tr>
    </>
  );
};

export default TableElement;