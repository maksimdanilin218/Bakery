import style from './FooterNews.module.css'
import NewCard from './NewsCard/NewsCard.jsx'

export default function FooterNews(){
    return(
        <div className={style.news}>
            <h1 className={style.title}>Recent News</h1>
            <NewCard />
        </div>
    )
}