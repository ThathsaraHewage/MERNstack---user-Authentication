import React from 'react';
import logo from './logo.png';
import view1 from './view1.jpg';
import view2 from './view2.jpg';
import view3 from './view3.jpg';

import card1 from './card01.jpg';
import card2 from './card02.jpg';
import card3 from './card03.jpg';
import card4 from './card04.jpg';
import card5 from './card05.jpg';
import card6 from './card06.jpg';
import card7 from './card07.jpg';
import card8 from './card08.jpg';

function Header() {
  return (
    <div>

     <center> <img src={logo} style={{width:"190px"}}/></center><br/>
      <center><h4>Electric items to your door step</h4></center>
     <center><h6>Electra LK (pvt) Ltd. 2021</h6></center>
      <br/>
     
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" style={{marginLeft:"130px",width:"80%"}}>
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
      <div class="carousel-inner">
      <div class="carousel-item active">
      <img src={view1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Create Your Account</h5>
        <p>You can start shopping and connect with us forever</p>
      </div>
      </div>
      <div class="carousel-item">
      <img src={view2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Home delivery</h5>
        <p>Fast and safe home delivery islandwide</p>
      </div>
     </div>
     <div class="carousel-item">
      <img src={view3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Mega Sales</h5>
        <p>Unbelievable discounts and sales every month.</p>
      </div>
    </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        <br/>

        <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button" class="btn btn-danger">Shop Now</button>
</div>

<br/>
<div class="card-group">
  <div class="card">
    <img src={card1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Smartphones and Accesories</h5>
      <p class="card-text">Android and iOS latest smartphones and other Accesories. </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src={card3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Home Equipments</h5>
      <p class="card-text">Smart TV, Radio , Home audio setups,Lightning, Electric irons, Torches, Fans and many more.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src={card2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Computers | Laptops and accesories</h5>
      <p class="card-text">Latest desktop computers and laptops for home, educational and office use with genuine operating systems and other latest features.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>


<div class="card-group">
  <div class="card">
    <img src={card4} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Gaming</h5>
      <p class="card-text">Latest gaming products and accesories from professional gaming companies.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src={card5} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Watches and Bands</h5>
      <p class="card-text">Wrist watches,Smart watches | Fitness and fashion bands.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src={card7} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Music equipments and entertainment</h5>
      <p class="card-text">Electronic musical equipments and accesories.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>


<div class="card-group">
  <div class="card">
    <img src={card6} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Kitchen Items</h5>
      <p class="card-text">Blenders, Grinders,Mixers, Kettles and many more electric items for your Kitchen.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src={card8} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Other</h5>
      <p class="card-text">All other electric items out of our main categories is here.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>

  
 
</div>
</div>
<br/><br/><br/>



    </div>
  );
}

export default Header;

