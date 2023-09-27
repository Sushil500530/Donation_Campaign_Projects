// import { useState } from 'react';
// import PropTypes from 'prop-types';
// const Banner = ({ category }) => {
    
//     const [items, setItems] = useState([])
//     const handleSearch = () => {
//         const input = document.getElementById('search');
//         const inputValue = input.value;
//         const findObjectsWithSameName = (categories, categoriesName) => {
//             return categories.filter(singleCategory => singleCategory.category == categoriesName)
//         }

//         const result = findObjectsWithSameName(category, inputValue);
//         setItems(result)
//     }
//     console.log(items);
//     return (
//         <div className="w-full h-[70vh]">
//             <div className="flex flex-col justify-center items-center  p-7 md:py-12 lg:py-32 space-y-12">
//                 <div>
//                 <h2 className="text-5xl font-bold text-center translate-x-3">I Grow By Helping People In Need</h2>
//                 </div>
//                 <div>
//                     <div className="relative flex items-center justify-center h-[48px] w-full z-50">
//                         <input required type="search" id="search"
//                             className="peer h-full w-full md:w-[400px] lg:w-[550px] rounded-[7px] border border-blue-500 focus:border-2 focus:border-gray-500 px-4 py-2 focus:outline-0 "
//                             placeholder="search here.... "
//                         />

//                         <button onClick={handleSearch}
//                             className="!absolute right-2 top-1 z-10 select-none rounded bg-[#FF444A] py-2 px-4 text-center align-middle font-sans text-[14px] font-bold  text-white shadow-md hover:bg-red-700  transition ease-in  "
//                             type="button"

//                         >
//                             Search
//                         </button>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// Banner.propTypes = {
//     category: PropTypes.object.isRequired,
// }
// export default Banner;