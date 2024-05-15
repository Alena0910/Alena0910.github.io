import React from "react";
import { createRoot } from 'react-dom/client';
import App from './components/App';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetGithubApi from "./githubRestApi/GetGithubApi";

const root = createRoot(document.getElementById('root'));

root.render(
        <React.StrictMode>
            <App />
            <GetGithubApi />
        </React.StrictMode>
    );