<template>
  <body class="carousel-bg">
    <!-- Quote Image -->
    <div>
      <img
        alt="commas"
        src="https://i.imgur.com/gZ5HY0U.png"
        class="img-responsive quote-image"
      />
    </div>
    <!-- Carousel Start below -->
    <div
      id="carousel1"
      class="carousel slide testimonial-style"
      data-ride="carousel"
    >
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel1" data-slide-to="0" class="active"></li>
        <li data-target="#carousel1" data-slide-to="1"></li>
        <li data-target="#carousel1" data-slide-to="2"></li>
      </ol>
      <!-- Wrapper for slides -->
      <div class="carousel-inner">
        <div class="item active">
          <div class="carousel-caption testimonial-caption-style">
            <p>
              La mejor forma de avanzar en el aprendizaje de un idioma es un
              curso personalizado.
            </p>
            <p class="testimonial-authors">
              Mónica Barranco, Sales Project Manager, SIL Barcelona
            </p>
          </div>
        </div>
        <div class="item">
          <div class="carousel-caption testimonial-caption-style">
            <p>
              “¡Clases muy divertidas e interactivas! Nos encanta el curso”.
            </p>
            <p class="testimonial-authors">
              Lydia Baqués, Fisioterapeuta, Clínica Dexeus, Grupo Quirónsalud
            </p>
          </div>
        </div>
        <div class="item">
          <div class="carousel-caption testimonial-caption-style">
            <p>
              “Puntualidad con los deadlines y flexibilidad de horarios. Muy
              profesional”
            </p>
            <p class="testimonial-authors">Content Coordinator, TUI España</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style>
/* Testimonial CSS Code Start */
/* background */
.carousel-bg {
  background-color: #a90934;
  margin-top: 40px;
  margin-bottom: 40px;
}
/* quote */
.quote-image {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  padding-top: 60px;
  width: 50px;
}
/* text-style */
.testimonial-style .testimonial-caption-style {
  font-family: "Roboto";
  font-weight: 400;
  font-size: 24px;
  color: white;
  line-height: 20px;
  bottom: 40%;
  text-shadow: none;
  top: 10%;
}
.testimonial-style .testimonial-authors {
  font-family: "Roboto";
  font-weight: 700;
  font-size: 20px;
  color: white;
  line-height: 20px;
  margin-top: 30px;
}
/* carousel-height-control */
.testimonial-style .carousel-inner > .item {
  padding-top: auto;
  padding-bottom: auto;
  height: 300px;
}
/* indicators */
.testimonial-style .carousel-indicators .active {
  background-color: #a90934;
  width: 14px;
  height: 14px;
  transition: background 1s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.testimonial-style .carousel-indicators li {
  border: 2px solid #fff;
  background-color: #fff;
}
/* Textimonial CSS Code End */
</style>
