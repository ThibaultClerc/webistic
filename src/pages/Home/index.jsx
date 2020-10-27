import React from 'react'

export default function Home() {
  return (
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">Fake Web Agency</h1>
        <p class="lead font-weight-normal">Generating fake projects for 10 years</p>
        <a class="btn btn-outline-secondary" href="/works">See our projects</a>
      </div>
      <div class="product-device box-shadow d-none d-md-block"></div>
      <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>
  )
}
