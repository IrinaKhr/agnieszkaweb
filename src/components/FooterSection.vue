<template>
    <footer>
<div class="getintouch">
    <li>
      <h5> Email </h5>
      <p> lotoslanguages@gmail.com </p>
    </li>
    <li>
      <h5> Phone </h5>
      <p> +34647000123 </p>
    </li>
  </div>
  <div class="getintouch">
    <li>
      <h5> Connect </h5>
      <p> LinkedIn </p>
    </li>
    <li>
      <h5> Address </h5>
      <p> 2972 Westheimer Rd. Santa Ana, <br>
        Illinois 85486
      </p>
    </li>
  </div>
  <ul class="footerlist">
    <li> <router-link class="footerhome link" to='/'>Home</router-link></li>
    <li> <router-link class='link' to='/service'>Services</router-link></li>
    <li> <router-link class='link' to='/testimonials'>Testimonials</router-link></li>
    <li> <router-link class='link' to='/contact'>Contact us</router-link></li>
  </ul>
</footer>
</template>
<style>
footer {
  display: flex;
  margin: 0;
  justify-content: space-evenly;
  background-color: white;
  color: #514d67;
}

.getintouch {
  display: flex;
  flex-flow: column;
  list-style: none;
  justify-content: space-evenly;
}

.getintouch p {
  margin: 0px;
  color: rgb(85, 5, 26);
}
.getintouch h5 {
  margin: 0px;
}

.footerlist {
  list-style: none;
  display: flex;
  flex-flow: column;
  margin: 30px;
  border-left: solid 1px;
}

.footerlist .link {
  text-decoration: none;
  color: #514d67;
}

.footerlist .footerhome:hover {
  color: #55051a;
}
.footerlist .footerhome {
  color: #55051a;
}
</style>
