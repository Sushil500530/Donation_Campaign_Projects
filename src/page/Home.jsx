
// import Banner from '../components/Header/Banner/Banner';

// import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import ShowData from './pieChart/ShowData';
import DonationsCategory from '../components/DonationsCategory/DonationsCategory';


const Home = () => {
    //  const allCategories = useLoaderData()
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Fetch data from your local API or JSON file
        fetch('../../../public/data.json') // Replace with your API endpoint or file path
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setFilteredData(data);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleSearch = () => {
        // If the search query is empty, show all data
        if (!searchQuery) {
            setFilteredData(data);
        } else {
            // Filter data by search query
            const filtered = data.filter((item) => item.category.toLowerCase().includes(searchQuery.toLowerCase()))

            console.log(filtered);
            setFilteredData(filtered);
        }
    };

    return (
        <div>
            <div className="relative bg-[url('https://i.ibb.co/728hYyb/Rectangle-4281.png')] object-center z-0 w-full h-[70vh] bg-center bg-no-repeat bg-cover">
                <div className='hero-overlay absolute bottom-0 bg-white bg-opacity-80 w-full h-[70vh] flex justify-start items-start'></div>
                {/* <Banner category={allCategories}></Banner> */}
                <div className="w-full h-[70vh]">
                    <div className="flex flex-col justify-center items-center  p-7 md:py-12 lg:py-32 space-y-12">
                        <div>
                            <h2 className="text-5xl font-bold text-center translate-x-3">I Grow By Helping People In Need</h2>
                        </div>
                        <div>
                            <div className="relative flex items-center justify-center h-[48px] w-full z-50">
                                <form>
                                    <input
                                        required
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        type="search"
                                        id="search"
                                        className="peer h-full w-full md:w-[400px] lg:w-[550px] rounded-[7px] border border-blue-500 focus:border-2 focus:border-gray-500 px-4 py-3 focus:outline-0 "
                                        placeholder="search here.... "
                                    />

                                    <button
                                        onClick={handleSearch}
                                        className="!absolute right-2 top-[5px] z-10 select-none rounded bg-[#FF444A] py-2 px-4 text-center align-middle font-sans text-[14px] font-bold  text-white shadow-md hover:bg-red-700  transition ease-in  "
                                        type="button"

                                    >
                                        Search
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  lg:my-16 lg:mx-24 mt-6'>

                {/* <ShowData></ShowData> */}
                {
                    filteredData.length === 0 ? (<p className="h-[50vh] text-3xl font-bold flex justify-center items-center">No Data Found</p>) : 
                    filteredData?.map((categories) => <DonationsCategory categories={categories} key={categories.id} ></DonationsCategory>
                    )
                    }

            </div>
        </div>
    );
};

export default Home;