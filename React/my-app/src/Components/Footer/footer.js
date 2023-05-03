import React from 'react'
import  './footer.css'
function footer() {
  return (
   
        <footer className="color-nav" fixed="bottom">
  <div className="container">
    <div className="row">
      
      <div className="col-lg-4 col-md-6">
        <h3>Site Map</h3>
        <ul className="list-unstyled three-column">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Code</li>
          <li>Design</li>
          <li>Host</li>
          <li>Contact</li>
          <li>Company</li>
        </ul>
        <ul className="list-unstyled socila-list">
          <li><img src="http://placehold.it/48x48" alt="" /></li>
          <li><img src="http://placehold.it/48x48" alt="" /></li>
          <li><img src="http://placehold.it/48x48" alt="" /></li>
          <li><img src="http://placehold.it/48x48" alt="" /></li>
          <li><img src="http://placehold.it/48x48" alt="" /></li>
          <li><img src="http://placehold.it/48x48" alt="" /></li>
        </ul>
      </div>
      
      <div className="col-lg-4 col-md-6">
        <h3>latest Articles</h3>
        <div className="media">
          <a href="#" className="pull-left">
            <img src="http://placehold.it/64x64" alt="" className="media-object" />
          </a>
          <div className="media-body">
            <h4 className="media-heading">Programming</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        
        
      </div>
      
      <div className="col-lg-4">
        <h3>Our Work</h3>
        <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
        <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
        <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
        <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
      </div>
      
    </div>
  </div>
  <div className="copyright text-center">
    Copyright &copy; 2017 <span>Your Template Name</span>
  </div>
</footer>

   
  )
}

export default footer