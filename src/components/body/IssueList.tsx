import React, { useState, useEffect } from "react";
import './IssueList.css';
import axios from 'axios';
import { Link } from "react-router-dom";

const backgroundImg = require('./backgroundImg.jpg').default;

interface Issue {
    id: number;
    title: string;
    user: {
        login: string;
    };
    created_at: string;
}


function IssueList(){

    const [dataFromApi, setDataFromApi] = useState<Issue[]>([]);


    useEffect(() => {
        getPrivateRepositories();
    }, []);

    async function getPrivateRepositories() {
        try{
            const res = axios.get<Issue[]>('https://api.github.com/repos/Alena0910/Alena0910.github.io/issues')
            setDataFromApi((await res).data);
        }
        catch(error){
            alert('Error: ' + error);
            console.error('Error:', error);
        }
    }

    return(
        <div className="article-container">
            <img src={ backgroundImg } className='issue-background-img'></img>
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