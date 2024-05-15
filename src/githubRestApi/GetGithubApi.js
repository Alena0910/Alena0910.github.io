import axios from 'axios';

async function getPrivateRepositories() {
    try{
        const response = await axios.get('https://api.github.com/repos/Alena0910/Alena0910.github.io/issues', {
            headers: {
                'Authorization': `token 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`,
            }
        });
        return response.data.map(d=>{
            return {
                titile: d.titile, 
                id: d.id, 
                label: d.label,
                body: d.body, 
                private: d.private,
            }
        });
    }
    catch(error){
        console.error('Error:',error);
    }
}

(
    async()=>{
        console.log(getPrivateRepositories())
    }
)(); // test the function

class GetGithubApi extends React.Component{
    render() {
        return null;
    }
}

export default GetGithubApi;