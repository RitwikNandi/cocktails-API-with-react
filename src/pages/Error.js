import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Oops! No page to be explored here Mr.Sailor</h1>
        <Link to='/' className='btn btn-primary'>
          Back to the Shore!
        </Link>
      </div>
    </section>
  );
};

export default Error;
