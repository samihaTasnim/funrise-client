import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Manage = () => {

  const [info, setInfo] = useState([])
  useEffect(() => {
    fetch('https://gentle-cove-64506.herokuapp.com/toys')
    .then(res => res.json())
    .then(data => setInfo(data))
  },[])

   const deleteItem = (id) => {
     console.log(id);
     fetch(`https://gentle-cove-64506.herokuapp.com/delete/${id}`, {
      method: 'DELETE'
      })
      .then(res => res.json())
      .then(result => {
          console.log(result);
      })
   }

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
                  <td> &nbsp; <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteItem(`${product._id}`)} style={{cursor: 'pointer'}}/></td>
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