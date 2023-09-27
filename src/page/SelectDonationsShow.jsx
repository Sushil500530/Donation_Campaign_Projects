import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SelectDonationsShow = ({donations}) => {
    const {picture,category, id, card_bg, text_and_button_bg, price,title_btn} = donations || {};
    return (
        <div>
            <div style={{background:card_bg}} className="flex w-full flex-col md:flex-row gap-5 lg:flex-row items-center justify-start shadow-md pb-5 lg:pb-0 md:pb-0">
                <div className="w-full md:w-[40%] lg:w-[40%]">
                    <img className="w-full lg:w-full h-[300px] rounded" src={picture} alt="image" />
                </div>
                <div className="space-y-3">
                    {/* <h4 className="text-base font-normal border border-gray-500">Health</h4> */}
                    <button style={{background:title_btn,color:text_and_button_bg}} disabled className=" rounded font-semibold text-xl px-5 py-1">{category}</button>
                    <h2 className="text-2xl font-bold">Clean water for children</h2>
                    <p style={{color:text_and_button_bg}} className="text-2xl font-bold">$ {price}</p>
                   <Link to={`/home/${id}`}>
                   <button style={{background:text_and_button_bg,}} className="btn borde text-white px-4 py-2 capitalize text-[18px] hover:text-black">View Details</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};
SelectDonationsShow.propTypes = {
    donations: PropTypes.object.isRequired,
}

export default SelectDonationsShow;