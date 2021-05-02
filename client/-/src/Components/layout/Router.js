import React from 'react';
import { useContext } from 'react';
import {Link} from "react-router-dom";
import AuthContext from '../../Context/AuthContext';
import LogoutBTN from '../auth/LogoutBTN';

function Navbar() {

  const { loggedIn } = useContext(AuthContext);

  return (
  <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">

      <Link to ="/" class="navbar-brand" >Home</Link>
      {loggedIn === false && (
        <>
            <li class="nav-item">
                <Link to ="/login" class="nav-link active" aria-current="page">Login</Link>
            </li>
            <li class="nav-item">
                <Link to ="/register" class="nav-link active" aria-current="page">Register</Link>
            </li>
          
        </>
      )}

      {loggedIn === true && (
        <>
          <li class="nav-item">
                <Link to="/aboutus" class="nav-link active" aria-current="page" href="#">About us</Link>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Customer Care
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" href="#">Call Center</a></li>
              <li><a class="dropdown-item" href="#">FAQ</a></li>
              <li><a class="dropdown-item" href="#">Contact delivery service</a></li>
            </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" class="btn btn-danger">Shop Now</a>
            </li>

            <LogoutBTN/>

            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
         
       </>
        )}


    </ul>
   
  </div>
</div>
</nav>


</div>

  );
}

export default Navbar;
