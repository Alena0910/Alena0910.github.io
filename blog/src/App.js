import './App.css';
import ArticleCard from './components/AboutMe/ArticleCards';

function App() {
  return (
    <div className="App">
      <div>test</div>
      <ArticleCard image='https://fakeimg.pl/300/' title='文章標題' author='作者' date='日期'/>
    </div>
  );
}

export default App;
