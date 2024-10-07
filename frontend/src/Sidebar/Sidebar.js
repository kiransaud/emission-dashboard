import './Sidebar.css';
import Price from './Price/Price';
import Category from './Category/Category';
import Colors from './Colours/Colours';
function Sidebar({handleChange}){
    return (
        <>
        <div className="sidebar">
           
            <Category handleChange={handleChange}/>
            <Price  handleChange={handleChange}/>
            <Colors  handleChange={handleChange}/>
        </div>
        </>
    )
}
export default Sidebar;