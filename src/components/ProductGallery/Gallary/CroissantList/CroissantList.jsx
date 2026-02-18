import style from './CroissantList.module.css'

const croissants = [
    {
        img: './img/GallaryList/Croissants/croissant1.jpg',
        id: 1,
        title: ' Classic Butter'
    },
    {
        img: './img/GallaryList/Croissants/croissant2.jpg',
        id: 2,
        title: 'Choco Drizzle'
    },
    {
        img: './img/GallaryList/Croissants/croissant3.jpg',
        id: 3,
        title: 'Almond Flake'
    },
    {
        img: './img/GallaryList/Croissants/croissant4.jpg',
        id: 4,
        title: 'Raspberry Cream'
    },
    {
        img: './img/GallaryList/Croissants/croissant5.jpg',
        id: 5,
        title: 'Pistachio'
    },
    {
        img: './img/GallaryList/Croissants/croissant6.jpg',
        id: 6,
        title: 'ham & Cheese'
    },
]



function CroissantCard({img, title}){
    return(
        <div className={style.card}>
            <img src={img} alt="" className={style.img} />
            <p className={style.title}>{title}</p>
        </div>
    )
}

function CroissantList(){

    return(
        <div className={style.croissant}>
            {croissants.map((croissant) => (
                <CroissantCard key={croissant.id} title={croissant.title} img={croissant.img}/>
            ))}
        </div>
    )
}

export default CroissantList