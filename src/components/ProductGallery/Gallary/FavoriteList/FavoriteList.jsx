import style from './FavoriteList.module.css'

const favorites = [
    {
        img: '/img/GallaryList/Favorite/favorite1.jpg',
        id: 1,
        title: 'chocolate Eclair'
    },
    {
        img: '/img/GallaryList/Favorite/favorite2.jpg',
        id: 2,
        title: 'Mini Cheesecake'
    },
    {
        img: '/img/GallaryList/Favorite/favorite3.jpg',
        id: 3,
        title: 'Apricot Danisg'
    },
    {
        img: '/img/GallaryList/Favorite/favorite4.jpg',
        id: 4,
        title: 'Almond Tart'
    },
    {
        img: '/img/GallaryList/Favorite/favorite5.jpg',
        id: 5,
        title: 'Raspberry Twist'
    },
    {
        img: '/img/GallaryList/Favorite/favorite6.jpg',
        id: 6,
        title: 'Cinnamon Scone'
    },
]

function FavoriteCard({img, title}){
    return(
        <div className={style.card}>
            <img src={img} alt="" className={style.img} />
            <p className={style.title}>{title}</p>
        </div>
    )
}

function FavoriteList(){
    return(
        <div className={style.favorite}>
            {favorites.map((favorite) => (
                <FavoriteCard key={favorite.id} title={favorite.title} img={favorite.img}/>
            ))}
        </div>
    )
}

export default FavoriteList