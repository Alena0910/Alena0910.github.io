import React, { useState, useEffect } from "react";
import './IssueList.css';
import axios from 'axios';
import backgroundImg from '/src/components/body/backgroundImg.jpg';
import { Link } from "react-router-dom";


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
        <div className="article-container">
            <img src={ backgroundImg } className='background-img'></img>
            <div className="list-container">
                <Link to="/" className="issueList-home-link">Home</Link>
                <div>
                    {dataFromApi.map(d=>(
                        <Link 
                            key={d.id} 
                            className="articles" 
                            to={`/issue-list/${d.id}`} 
                            state={{ article: d }}
                        >
                            <h3>{d.title}</h3>
                            <p>作者: {d.user.login}</p>
                            <p>創建時間: {d.created_at}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default IssueList;