<template>
  <nav>
    <ul class='navbar'>
      <li class='coach'>
        <h1>ENGLISH COACH</h1>
        <p class='motto'>Language Coaching and Translation</p>
      </li>
      <li><router-link to='/' id='home'>Home</router-link></li>
      <li class='nav'><router-link to='/service'>Services</router-link></li>
      <li class='nav'><router-link to='/testimonials'>Testimonials</router-link></li>
      <li class='contact'><router-link to='/contact' class='link'>Contact us</router-link></li>
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
  text-align: center;
}

#home {
  color: #a90934;
}

#home:hover {
  color: #55051a;
}

.nav a:hover {
  color: #a90934;
}

.contact .link {
  background-color: #a90934;
  color: rgb(255, 255, 255);
  padding: 10px 30px 10px 30px;
  border-radius: 25px;
  text-decoration: none;
}

.contact .link:hover {
  background-color: #55051a;
  transform: scale(1.02);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
