import { useEffect, useState } from 'react';
import SelectDonationsShow from './SelectDonationsShow';

const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [notfound, setNotFound] = useState(false);
    const [dataLength, setDataLength] = useState([2]);

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem("donations"));
        if (donationItems) {
            setDonations(donationItems)
        }
        else {
            setNotFound("No Data Found")
        }
    }, [])

    // console.log(dataLength);
    // console.log(setDataLength.length);
    // console.log(donations.length);
    return (
        <div className='lg:mx-24 lg:mt-8'>
            {
                notfound ? (<p className="h-[50vh] text-3xl font-bold flex justify-center items-center">{notfound}</p>) : ""
            }
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 m-5'>
                {
                    donations?.slice(0, dataLength).map((donation, idx) => <SelectDonationsShow donations={donation} key={idx}></SelectDonationsShow>)
                }
            </div>
            <div className={dataLength === donations.length ? "hidden" : ""}>
                {
                    donations.length >= 2 ? <div className='flex item-center justify-center my-12'>
                        <button onClick={() => setDataLength(donations.length)} className='btn bg-green-600 text-white border px-6 py-2 hover:bg-transparent hover:border-green-600 hover:text-green-600 capitalize text-xl'>See All</button>
                    </div> : ''
                }
            </div>
        </div>
    );
};

export default Donation;