import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
  color: 'white'
}

const backgroundStyle = {
  backgroundColor: '#1b39bf',
  height: '70vh'
}

const Sidebar = () => {
  return (
    <div style={backgroundStyle} className="p-3 m-2 rounded">
      <ul className="m-5 p-4">
        <li><Link to="/manage" style={linkStyle}>Manage Product</Link></li>
        <li><Link to="/admin" style={linkStyle}>Add Product</Link></li>
        <li><Link to="/manage" style={linkStyle}>Edit Product</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;