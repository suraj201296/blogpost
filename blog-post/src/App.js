
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&pageSize=10&page=${page}&apiKey=d2cd053790a143a2946f02d076c685f2`)
      .then(response => {
        console.log(response);
        setPosts(response.data.articles);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [page]);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogPostList posts={posts} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/post/:id" element={<BlogPostDetails posts={posts}/>} />
      </Routes>
    </Router>
  );
}

export default App;
