import { Link } from "react-router-dom";


const DonationsCategory = (categories) => {
    const { category, title, picture, id, category_bg,} = categories?.categories;
    // console.log(category_bg);
    return (
        <div>
            <div style={{background:category_bg,borderRadius:8}}>
                <div className="w-full h-[250px] rounded-md">
                <Link to={`/home/${id}`} ><figure><img className="w-full rounded-md h-[250px]" src={picture} alt="Shoes" /></figure></Link>
                </div>
                <div className="card-body">
                    <p style={{color:category_bg}} className={`rounded text-center w-[25%] font-semibold py-[2px] border-none outline-none bg-white `}>{category}</p>
                <h2 className="card-title text-white">{title}</h2>
                
            </div>
        </div>
        </div>
    );
};

export default DonationsCategory;