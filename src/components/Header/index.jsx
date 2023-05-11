import React from "react";

export default function Header() {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">Grocery Store</h1>
      <p className="lead">
        Welcome to Grocery App. Your one stop shop for all grocery needs.
      </p>
      <hr className="my-4" />
      <p>
        We have all the grocery products.
      </p>
      <a className="btn btn-primary btn-lg" href="#" role="button">
        Learn more
      </a>
    </div>
  );
}
