import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

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
      <div className="m-5 p-4">
        <p><Link to="/manage" style={linkStyle}><FontAwesomeIcon icon={faTasks}/> &nbsp; Manage Product</Link></p>
        <p><Link to="/admin" style={linkStyle}><FontAwesomeIcon icon={faPlus} /> &nbsp; Add Product</Link></p>
        <p><Link to="/manage" style={linkStyle}><FontAwesomeIcon icon={faEdit} /> &nbsp; Edit Product</Link></p>
      </div>
    </div>
  );
};

export default Sidebar;