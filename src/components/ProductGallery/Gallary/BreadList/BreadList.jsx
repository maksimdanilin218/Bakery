import style from './BreadList.module.css'

const breads = [
    {
        img: './img/GallaryList/Bread/bread1.jpg',
        id: 1,
        title: 'Rustic Sourdough'
    },
    {
        img: './img/GallaryList/Bread/bread2.jpg',
        id: 2,
        title: 'Golden Braided'
    },
    {
        img: './img/GallaryList/Bread/bread3.jpg',
        id: 3,
        title: 'Multigrain Loaf'
    },
    {
        img: './img/GallaryList/Bread/bread4.jpg',
        id: 4,
        title: 'Classic Baguette'
    },
    {
        img: './img/GallaryList/Bread/bread5.jpg',
        id: 5,
        title: 'Butter Brioche'
    },
    {
        img: './img/GallaryList/Bread/bread6.jpg',
        id: 6,
        title: 'Seeded Rye'
    },
]

function BreadCard({img, title}){
    return(
        <div className={style.card}>
            <img src={img} alt="" className={style.img} />
            <p className={style.title}>{title}</p>
        </div>
    )
}


function BreadList(){
    return(
        <div className={style.bread}>
            {breads.map((bread) => (
                <BreadCard key={bread.id} title={bread.title} img={bread.img}/>
            ))}
        </div>
    )
}

export default BreadList
