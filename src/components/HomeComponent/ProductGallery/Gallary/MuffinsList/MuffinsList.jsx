import style from "./Muffins.module.css"

const muffins = [
    {
        img: './img/GallaryList/Muffins/muffins1.jpg',
        id: 1,
        title: 'Choco Chunk'
    },
    {
        img: './img/GallaryList/Muffins/muffins2.jpg',
        id: 2,
        title: 'Blueberry'
    },
    {
        img: './img/GallaryList/Muffins/muffins3.jpg',
        id: 3,
        title: 'Lemon Ctream'
    },
    {
        img: './img/GallaryList/Muffins/muffins4.jpg',
        id: 4,
        title: 'Classic Choco'
    },
    {
        img: './img/GallaryList/Muffins/muffins5.jpg',
        id: 5,
        title: 'Triple Choco'
    },
    {
        img: './img/GallaryList/Muffins/muffins6.jpg',
        id: 6,
        title: 'Raspbbery'
    },
]

function MuffinsCard({img, title}){
    return(
        <div className={style.card}>
            <img src={img} alt="" className={style.img} />
            <p className={style.title}>{title}</p>
        </div>
    )
}

function MuffinsList(){
    return(
        <div className={style.muffins}>
            {muffins.map((muffin) => (
                <MuffinsCard key={muffin.id} title={muffin.title} img={muffin.img} />
            ))}
        </div>
    )
}

export default MuffinsList