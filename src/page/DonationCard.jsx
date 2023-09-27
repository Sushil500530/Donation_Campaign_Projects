

const DonationCard = ({donations}) => {
    const { id, picture, title, category, category_bg, card_bg, text_and_button_bg, description, price } = donations || {};
    return (
        <div className="flex bg-violet-50 items-center flex-col md:flex-row lg:flex-row justify-start gap-6 shadow-md w-full rounded h-full md:h-[250px] lg:h-[250px] pb-5 md:pb-0 lg:pb-0">
            <div className="w-full md:w-[40%] lg:w-[40%] md:h-[250px] lg:h-[250px]">
                <img className="w-full h-full " src={picture} alt="image" />
            </div>
            <div className="space-y-2">
                <h3 className="text-base font-semibold">Health</h3>
                <h2 className="text-2xl font-bold">Good Health</h2>
                <p className="text-base font-bold">$ 200</p>
                <button className="btn bg-violet-400 text-white px-4 py-1">View Details</button>
            </div>
        </div>
    );
};

export default DonationCard;