import style from './FeaturedCard.module.css'

const treats = [
    {
        img: './img/Featured/treats1.png',
        id: 1,
        title: 'Puff Pastry ',
        price: 8
    },
    {
        img: './img/Featured/treats2.png',
        id: 2,
        title: 'Doughnuts',
        price: 8
    },
    {
        img: './img/Featured/treats3.png',
        id: 3,
        title: 'Brownies',
        price: 8
    },
]
function FeaturedCard({img, title, price}){
    return(
        <div className={style.card}>
            <img src={img} alt="" className={style.img} />
            <div className={style.info}>
                <p className={style.title}>{title}</p>
                <p className={style.title}>{price}$</p>
            </div>
        </div>
    )
}

function FeaturedList(){
    return(
        <div className={style.treats}>
            {treats.map((treat) => (
                <FeaturedCard key={treat.id} title={treat.title} img={treat.img} price={treat.price}/>
            ))}
        </div>
    )
}

export default FeaturedList