import React from 'react';
import axios from 'axios';
import { ArticlePage } from './components/ArticlePage';
import { Homepage, ICard } from './components/Homepage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  const [data, setData] = React.useState([] as ICard[])
  const API_KEY = '62f2901bad3f4a7dae34f403323e7a0a';

  React.useEffect (() => {
    async function fetchData() {
      try {
        const dataResponse = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`)
          setData(dataResponse.data.articles.map((article : any) => {
            article.id = Math.floor(Math.random() * 10000);
            return article;
          }))
      } catch (error) {
        alert ("data fetch error")
        console.error(error)
      }
    }
    fetchData()
  },[])
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage cards={data}/>} />
        <Route path="/article/:id" element={<ArticlePage cards={data}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
