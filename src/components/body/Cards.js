import { Link, useParams } from "react-router-dom";

const Cards = (props) => {
    const { data } = props;
    const { CardsId } = useParams();
    return (
        <div>
            { data.filter((d) => d.id === CardsId).map((d) => (
                    <div key={d.id} className="articles">
                        <h3>{d.title}</h3>
                        <p>作者: {d.user.login}</p>
                        <p>創建時間: {d.created_at}</p>
                        <p>標籤: {d.labels.name}</p>
                        <p>{d.body}</p>
                    </div>
                ))}
            <Link to="/">Home</Link>
            <Link to="/issue-list">Back to issue list</Link>
        </div>
    )
}

export default Cards;