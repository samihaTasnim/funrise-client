import React, { useEffect, useState } from 'react';

const Manage = () => {

  const [info, setInfo] = useState([])
  useEffect(() => {
    fetch('https://gentle-cove-64506.herokuapp.com/toys')
    .then(res => res.json())
    .then(data => setInfo(data))
  },[])

  return (
    <div className="container mt-5">
      <h2 className="m-3">Manage Product</h2>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product name</th>
              <th scope="col">Weigth</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              info.map(product => (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.weight}</td>
                  <td>$ {product.price}</td>
                  <td>{product.date}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      </div>
  );
};

export default Manage;