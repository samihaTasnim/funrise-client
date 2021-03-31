import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
const Order = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [info, setInfo] = useState([])

  const email = loggedInUser.email;
  useEffect(() => {
    fetch(` https://gentle-cove-64506.herokuapp.com/orders/${email}`)
    .then(res => res.json())
    .then(data => setInfo(data))
  })
  return (
    <div className="container mt-5">
      <h2 className="m-3">Order history</h2>
      <p>Orderd by: {info.email}</p>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {
              info.map(product => (
                <tr>
                  <td>{product.name}</td>
                  <td>1</td>
                  <td> $ {product.price}</td>
                  <td> {product.date}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      </div>
  );
};

export default Order;