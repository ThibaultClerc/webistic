import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './style.css'

export default function Home() {
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3  bg-light main-jumbotron">
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h2 className="display-1 font-weight-bold text-white">Webistic</h2>
        <h1 className="lead font-weight-light text-white"><FormattedMessage id="home.description"/></h1>
        <Link to="/works" className="btn btn-info mt-3"><FormattedMessage id="button.goToWorks"/></Link>
      </div>
      <div className="product-device box-shadow d-none d-md-block"></div>
      <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>
  )
}
