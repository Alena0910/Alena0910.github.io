import './ArticleCards.css';

// 文章列表

function ArticleCard(props){
    const {image, title, author, date} = props;
    // 傳入資料
    return(
        <div className='article-card'>
            <img alt='文章圖片' width="100%" src={image}></img>
            <h3 className='article-title'>{title}</h3>
            <div>  {author} / {date}</div>
        </div>
    )
}

export default ArticleCard;