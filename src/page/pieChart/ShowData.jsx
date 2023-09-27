import { useState, useEffect } from 'react';

const ShowData = () => {
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
            const filtered = data.filter((item) => item.category.toLowerCase().includes(searchQuery.toLowerCase()) )
            
            console.log(filtered);
            setFilteredData(filtered);
        }
    };

    return (
        <div>
            <div className='fex items-center justify-center ml-12'>
                <div >
                    <input className='border border-black px-3 py-3 rounded'
                        type="search"
                        placeholder="Search by name or category..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={handleSearch} className='btn text-white text-xl bg-green-500'>Search</button>
                </div>

                <ul>
                    {filteredData.map((item) => (
                        <li key={item.id}>{item.category} </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ShowData;