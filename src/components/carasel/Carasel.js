import React from 'react';
import classes from './Carasel.module.css';

const Caracel = () => {
  return (
    <div className={classes.Caracel}>
    <div className={classes.titleCaracel} style={{textAlign: 'center'}}>
      <h1>Товары для спорта</h1>
    </div>
       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
             <div className="carousel-item active">
                  <div className={classes.image}>
                    <img src="../../img/images.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </div>

             </div>
             <div className="carousel-item">
                  <div className={classes.image}>
                    <img src="../../img/images1.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>

             </div>
             <div className="carousel-item">
                  <div className={classes.image}>
                    <img src="../../img/images2.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </div>

             </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
          </a>
       </div>
    </div>
  )
}
export default Caracel
