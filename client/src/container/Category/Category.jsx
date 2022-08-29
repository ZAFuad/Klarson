import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import data from '../../constants/data'
import './Category.css'

const Category = () => {

  const [category, setCategory] = useState([]);
  useEffect(()=>{
    const fetchData = async() =>{
      const result = await axios.get("/api/category")
      setCategory(result.data);
    }
    fetchData();
  },[])

  return (
    <div className='app__bg c-container'>
        <h1 className="section-title" style={{'color':"white"}}>Categories</h1>
      <div className="c-row">
          {category.map((item) => (
                <div className="c-col" key={item._id}>
                    <img classname="c-img" src={item.image} alt={item.title} />
                    <div className="category-content">
                        <p>{item.title}</p>
                        <button className='c-btn'>Shop Now</button>
                    </div>
                </div>
          ))
          }
      </div>
    </div>
  )
}

export default Category
