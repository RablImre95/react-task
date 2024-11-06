import { useEffect, useState } from "react";
import Page from './Page'
import './App.css'


function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=20&start-with-lorem=1")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData)
        setLoading(false)
      })
  }, []);

  return (
    <div>
      {loading ? (<p>loading...</p>) : (<Page data={data} /> )}
    </div>
  );
}

export default App;