import style from "./BlogComponent.module.css"
import icon from "/BlogComponentImage/Icon.png"
import BlogCategory from "./BlogCategory/BlogCategory"

export default function BlogComponent() {
    return (
        <div className={style.BlogContainer}>
            <div className={style.headContainer}>
                <div className={style.InfoContainer}>
                    <h1 className={style.title}> Our Latest Blog</h1>
                    <p className={style.text}>Read the latest news, tips, and delicious recipes from our bakery</p>
                    <div className={style.SearchContainer}>
                        <input className={style.input} type="text" placeholder="Search.." />
                        <img className={style.SearchIcon} src={icon} alt="" />
                    </div>
                </div>
            </div>
            <BlogCategory />
        </div>
    )
}