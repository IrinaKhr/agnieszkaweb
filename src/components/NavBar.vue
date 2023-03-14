<template>
<nav>
    <ul class='navbar'>
        <li class='coach'><h1>ENGLISH COACH</h1>
        <p class ='motto'>Language Coaching Translation</p></li>
            <li> <a id='home'>Home</a></li>
            <li class="nav"> <a>Services</a></li>
            <li class="nav"> <a>Testimonials</a></li>
        <li class="contact"> <a>Contact Us</a></li>
      </ul>
</nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  list-style: none;
  background-color: white;
  margin: 0;
}

.navbar a {
  text-decoration: none;
  color: #514d67;
  margin: 50px;
}

.coach:hover {
  transform: scale(1.02);
}

.motto {
  font-size: 13px;
  line-height: 0px;
  text-align:center;
}

.contact a {
  text-decoration: none;
  color: #514d67;
}

#home {
  color: #a90934;
}

#home:hover {
  color: #55051A;
}

.nav a:hover {
  color: #a90934;
}

.contact a {
  background-color: #a90934;
  color: rgb(255, 255, 255);
  padding: 10px 30px 10px 30px;
}

.contact a:hover {
  background-color: #55051A;
  transform: scale(1.02);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

</style>
