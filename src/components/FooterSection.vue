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
    <li> <a class="footerhome" href="Aboutus">Home</a></li>
    <li> <a href="Aboutus">Services</a></li>
    <li> <a href="Projects">Testimonials</a></li>
    <li> <a href="Policy">Privacy Policy</a></li>
  </ul>
</footer>
</template>
<style>
footer {
  display: flex;
  margin: 0;
  font-size: 13px;
  background-color: #a90934;
  color: white;
  justify-content: space-evenly;
}

.getintouch {
  display: flex;
  flex-flow: column;
  list-style: none;
  margin: 50px;
  padding-left: 30px;
  padding-top: 30px;
  justify-content: space-evenly;
}

.getintouch p {
  font-size: 12px;
  margin: 0px;
}
.getintouch h5 {
  margin: 0px;
  color: #514d67;
}

.footerlist {
  list-style: none;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin: 60px;
  border-left: solid 1px;
}

.footerlist a {
  text-decoration: none;
  color: #514d67;
  margin: 0;
}

.footerlist .footerhome:hover {
  color: #55051a;
}
.footerlist .footerhome {
  color: rgb(255, 255, 255);
}
.footerlist a:hover {
  color: #55051a;
}
</style>
