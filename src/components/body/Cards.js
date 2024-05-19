import { Link, useLocation, useParams } from "react-router-dom";
import backgroundImg from '/src/components/body/backgroundImg.jpg';
import './Cards.css';

const Cards = () => {
    const { CardsId } = useParams();
    const { state } = useLocation();
    const data = state?.article || {};

    console.log("data ", data);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <img src={ backgroundImg } className='background-img'></img>
            <div className="cards-articles">
                <h3>{data.title}</h3>
                <p>作者: {data.user.login}</p>
                <p>創建時間: {data.created_at}</p>
                <p>標籤: {data.labels.name}</p>
                <p>文章ID: { CardsId }</p>
                <p>{data.body}</p>
            </div>
            <Link to="/" className="cards-link">Home</Link>
            <Link to="/issue-list" className="cards-link">Back to issue list</Link>
        </div>
    )
}

export default Cards;
