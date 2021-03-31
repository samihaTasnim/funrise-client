import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('https://gentle-cove-64506.herokuapp.com/toys')
    .then(res => res.json())
    .then(data => setToys(data))
}, [])

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
      {
        toys.map(toy => (
          <div className="col">
            <div className="card w-75 shadow rounded" style={{height: '240px'}}>
              <img src={toy.imgage} className="card-img-top mx-auto" alt="..." style={{width: '30%'}}/>
               <div className="card-body">
                 <h5 className="card-title text-center">{toy.name}</h5>
                  <div className="card-text m-2">
                    <span className="card-text">Price: ${toy.price}</span>
                    <Link to={`/checkout/${toy._id}`} type="button" className="btn btn-success" style={{marginLeft: '57%'}}>Buy now</Link>
                  </div>
              </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Home;