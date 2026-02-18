import "./HeadInfo.css"


export default function HeadInfo (){
    return(
        <div className="HeadInfo">
            <p className="text">Delicious Cafe</p>
            <h1 className="title">Sweet Treats, <br />Perfect Eats</h1>
            <div className="InfoButton">
                <button className="btn">Shop Now</button>
                <button className="btn">Learn More</button>
            </div>
        </div>
    )
}