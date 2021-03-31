import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Admin = () => {

  const [image, setImage] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    const productInfo = {
      name: data.name,
      imgage: image,
      price: data.price,
      weight: data.weight
    };
    const url = `https://gentle-cove-64506.herokuapp.com/addProduct`;
    
    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productInfo)
    })
    .then(res => console.log('server side response', res))
  }
  
  const getImage = (event) => {
      const imageData = new FormData();
      imageData.set('key', '7a727552badece9d72ca5183c3ca8437');
      imageData.append('image', event.target.files[0]);
      
      axios.post('https://api.imgbb.com/1/upload', 
      imageData)
      .then(function (response) {
        setImage(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h3>SideBar</h3>
        </div>
        <div className="col-md-8">

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="row">
              <div className="col-md-6">
                <label htmlFor="name">Product Name:</label>
                <br />
                <input name="name" className="p-1" ref={register} />
              </div>
              <div className="col-md-6">
                <label htmlFor="price">Price:</label>
                <br />
                <input name="price" ref={register({ required: true })} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="weight">Weight:</label>
                <br />
                <input name="weight" ref={register({ required: true })} />
              </div>
              <div className="col-md-6 ">
                <label htmlFor="file">Add photo:</label>
                <input type="file" className="p-2" name="file" onChange={getImage}/>
              </div>
            </div>
            <input type="submit" value="Add" />

          </form>

        </div>
      </div>
    </div>
  );
};

export default Admin;