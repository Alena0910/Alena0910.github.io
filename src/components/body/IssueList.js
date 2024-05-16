import React, {useState} from "react";
import './IssueList.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function IssueList(){

    const [dataFromApi, setDataFromApi] = useState([]);

    useEffect(() => {
        getPrivateRepositories();
    }, []);

    async function getPrivateRepositories() {
        axios.get('https://api.github.com/repos/Alena0910/Alena0910.github.io/issues', {
            headers: {
                'Authorization': `token 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`,
            }
        })
        .then((res) => {
            console.log("newData", res.data);
            setDataFromApi(res.data);
        })
        .catch((error) => {
            alert('Error:', error);
            console.error('Error:', error);
        });
    }

    return(
        <div className="articleList">
            <Link to="/profile">Profile</Link>
            <div className="article-container">
                {dataFromApi.map(d=>(
                    <div key={d.id} className="articles">
                        <h3>{d.title}</h3>
                        <p>作者: {d.user.login}</p>
                        <p>創建時間: {d.created_at}</p>
                        <p>{d.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default IssueList;