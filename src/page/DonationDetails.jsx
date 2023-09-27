import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsShow from "./DonationDetailsShow";


const DonationDetails = () => {
    const [detailShow,setDetailShow] = useState() ;
    const details = useLoaderData() ;
    const {id} = useParams() ;
    const intId = parseInt(id)
    // console.log(typeof id);
    useEffect(()=>{
        const findId = details?.find((detail) => detail.id === intId) ;
        setDetailShow(findId)
    },[intId,details])

    return (
        <div className="lg:mx-24 lg:mt-6">
            <DonationDetailsShow details={detailShow}></DonationDetailsShow>
        </div>
    );
};

export default DonationDetails;