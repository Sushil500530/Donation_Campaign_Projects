
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const DonationDetailsShow = ({ details }) => {
    const { category, title, picture, id, category_bg, card_bg, text_and_button_bg, price, description } = details || {};
    console.log(details);
    
    const handleStored =() => {
        const addStoredDonations = [] ;

        const donationItems = JSON.parse(localStorage.getItem("donations")) ; 
        if(!donationItems){
            addStoredDonations.push(details) 
            localStorage.setItem("donations", JSON.stringify(addStoredDonations)) ;
            Swal.fire({
                title: 'Successfully!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Ok'
              })

        }
        else{
            addStoredDonations.push(...donationItems,details) ;
            localStorage.setItem("donations", JSON.stringify(addStoredDonations)) ;
            Swal.fire({
                title: 'Successfully!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        }
        
    }


    return (
        <div>
            <div className="hero h-[70vh] relative" >
                <img className="w-full h-[70vh]" src={picture} />
                <div className="hero-overlay absolute bottom-0 bg-opacity-60 w-full h-[80px] flex justify-start p-6 items-center">
                    <button onClick={handleStored} className="btn bg-[#FF444A] outline-none border-none text-[18px] text-white font-medium hover:bg-red-700 capitalize">donate ${price}</button>
                </div>
            </div>
            <div className="my-5 p-5 space-y-5">
                <h1 className="text-3xl lg:text-5xl font-bold">{title}</h1>
                <p>
                    There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.
                </p>
                <h3 className=" text-xl lg:text-2xl font-bold">Here are some of the benefits of a {title}</h3>
                <ul className="list-disc m-5 space-y-2">
                    <li>Increased earning potential: People with higher levels of education tend to earn more money than those with lower levels of education. This is because education provides people with the skills and knowledge they need to get better jobs.</li>
                    <li>Better health: People with higher levels of education tend to have better health than those with lower levels of education. This is because education teaches people about healthy living habits and how to access healthcare resources.</li>
                    <li>Increased civic engagement: People with higher levels of education are more likely to vote and participate in other civic activities. This is because education teaches people about their rights and responsibilities as citizens.</li>
                    <li>Reduced crime: People with higher levels of education are less likely to commit crimes. This is because education teaches people about the consequences of crime and how to make positive choices.</li>

                </ul>
            </div>
        </div>
    );
};

export default DonationDetailsShow;