import style from "./CakeList.module.css"

const cakes = [
    {
        img: '/img/GallaryList/Cake/cake1.jpg',
        id: 1,
        title: 'Chocolate Royale Drip'
    },
    {
        img: '/img/GallaryList/Cake/cake2.jpg',
        id: 2,
        title: 'Strawberry Cloud Shortcake'
    },
    {
        img: '/img/GallaryList/Cake/cake3.jpg',
        id: 3,
        title: 'Raspberry Lemon Bliss'
    },
    {
        img: '/img/GallaryList/Cake/cake4.jpg',
        id: 4,
        title: "Caramel Pecan Delight"
    },
    {
        img: '/img/GallaryList/Cake/cake5.jpg',
        id: 5,
        title: 'Cookies & Cream Supreme'
    },
    {
        img: '/img/GallaryList/Cake/cake6.jpg',
        id: 6, 
        title: 'Pistachio Berry Dream'
    },
]

function CakeCard({img, title}){
    return(
        <div className={style.card}>
            <img src={img} alt="" className={style.img} />
            <p className={style.title}>{title}</p>
        </div>
    )
}
function CakeList(){

    return(
        <div className={style.cake}>
            {cakes.map((cake) => (
                <CakeCard key={cake.id} title={cake.title} img={cake.img}/>
            ))}
        </div>
    )
}

export default CakeList