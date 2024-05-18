import { Link } from "react-router-dom";

const Cards = (props) => {
    const { data } = props;
    return (
        <div>
            <div key={data.id} className="articles">
                <h3>{data.title}</h3>
                <p>作者: {data.user.login}</p>
                <p>創建時間: {data.created_at}</p>
                <p>{data.body}</p>
            </div>
            <Link to="/">Home</Link>
            <Link to="/issue-list">Back to issue list</Link>
        </div>
    )
}

export default Cards;
