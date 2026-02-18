import style from './NewsCard.module.css'

const news = [
    {
        img: './img/News/news1.png',
        title: 'June 14,2024',
        text: 'Puff pastry bliss.',
        id: 1
    },
    {
        img: './img/News/news2.png',
        title: 'June 14,2024',
        text: 'Puff pastry bliss.',
        id: 2
    },
]

function NewCard({img, title, text}){
    return(
        <div className={style.card}>
            <img src={img} alt="" className={style.img} />
            <div className={style.info}>
                <p className={style.title}>{title}</p>
                <p className={style.text}>{text}</p>
            </div>
        </div>
    )
}

function NewsList(){
    return(
        <div className={style.news}>
            {news.map((newt) => (
                <NewCard key={newt.id} text={newt.text} title={newt.title} img={newt.img}/>
            ))}
        </div>
    )
}
export default NewsList