import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
  const { id } = useParams()
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [toy, setToy] = useState([])

  useEffect(() => {
    fetch(`https://gentle-cove-64506.herokuapp.com/toys/${id}`)
      .then(res => res.json())
      .then(data => setToy(data[0]))
  }, [id])

  const sendToDatabase = () => {
    let {name, price, weight} = toy;
    const checkoutInfo = {
      name: name,
      price: price,
      weight: weight,
      email: loggedInUser.email,
      date: new Date()
    }
    fetch('https://gentle-cove-64506.herokuapp.com/setcart', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(checkoutInfo)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  console.log(toy);
  return (
    <div className="container mt-5">
      <h2 className="m-3">Checkout</h2>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Weight</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{toy.name}</td>
              <td>{toy.weight} gm</td>
              <td> $ {toy.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end m-3">
       <button className="btn btn-success" onClick={sendToDatabase}>Checkout</button>
      </div>
      </div>
  );
};

export default Checkout;