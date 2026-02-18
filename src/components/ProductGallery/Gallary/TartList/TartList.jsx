import style from './TartList.module.css'

const tarts = [
    {
        img: '/img/GallaryList/Tart/tart1.jpg',
        id: 1,
        title: 'Berry Custard'
    },
    {
        img: '/img/GallaryList/Tart/tart2.jpg',
        id: 2,
        title: 'Lemon Meringue'
    },
    {
        img: '/img/GallaryList/Tart/tart3.jpg',
        id: 3,
        title: 'Choco Hazelnut'
    },
    {
        img: '/img/GallaryList/Tart/tart4.jpg',
        id: 4,
        title: 'Fruit Medley'
    },
    {
        img: '/img/GallaryList/Tart/tart5.jpg',
        id: 5,
        title: 'Pistachio Raspberry'
    },
    {
        img: '/img/GallaryList/Tart/tart6.jpg',
        id: 6,
        title: 'Caramel Walnut'
    },
]
function TartCard({ img, title }) {
    return (
        <div className={style.card}>
            <img src={img} alt="" className={style.img} />
            <p className={style.title}>{title}</p>
        </div>
    )
}

function TartList(){
    return(
        <div className={style.tart}>
            {tarts.map((tart) => (
                <TartCard key={tart.id} title={tart.title} img={tart.img}/>
            ))}
        </div>
    )
}

export default TartList