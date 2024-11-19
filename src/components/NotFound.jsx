// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notFound-container">
      <h1 className="notFound-title">404 - Page Not Found</h1>
      <p className="notFound-text">The page you are looking for does not exist.</p>
      <Link to="/" className="notFound-link">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;

