<template>
  <div class="about">
    <NavBar/>
    <section class="light">
  <div class="container py-2">
    <div class="h1 text-center text-dark" id="pageHeaderTitle">Services</div>

    <article class="postcard light blue">
      <p class="postcard__img_link">
        <img class="postcard__img" src="https://static.wixstatic.com/media/0a69b154ca134611ab35f6c4e3ffcd43.jpg/v1/fill/w_979,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Chica%20usando%20la%20computadora%20port%C3%A1til.jpg" alt="Image Title" />
      </p>
      <div class="postcard__text t-dark">
        <h1 class="postcard__title blue">Conversation</h1>
        <div class="postcard__subtitle small">
      Llegar a la fluidez en inglé déjanos acompañarte en ese reto con clases adaptadas a tu medida.
        </div>
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt">
          En Lotos Languages ofrecemos clases individuales de inglés CELTA.</div>
        <ul class="postcard__tagbox">
          <li class="tag__item">Presencial o Online</li>
          <li class="tag__item">Class duration 60 mins.</li>
          <li class="contact">
        <router-link to="/contact">Get in touch</router-link>
          </li>
        </ul>
      </div>
    </article>
    <article class="postcard light red">
      <p class="postcard__img_link">
        <img class="postcard__img" src="https://static.wixstatic.com/media/dadfb09091a94356850ecc528e626098.jpg/v1/crop/x_0,y_6,w_1920,h_1265/fill/w_979,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Eventos%20de%20networking.jpg" alt="Image Title" />
      </p>
      <div class="postcard__text t-dark">
        <h1 class="postcard__title red">Business English</h1>
        <div class="postcard__subtitle small">Aprender juntos, equivocarse juntos, crecer juntos.
        </div>
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt">Un curso de inglés.</div>
        <ul class="postcard__tagbox">
          <li class="tag__item">Presencial o Online</li>
          <li class="tag__item">Class duration 60 mins.</li>
          <li class="tag__item play red">
            <router-link to="/contact">Get in touch</router-link>
          </li>
        </ul>
      </div>
    </article>
    <article class="postcard light green">
      <p class="postcard__img_link">
        <img class="postcard__img" src= "https://fastly.picsum.photos/id/534/4000/3000.jpg?hmac=lZH_v84ot8WWUIgqwrJvFKqtockRBoqVnStUqqaJFug" alt="Image Title" />
      </p>
      <div class="postcard__text t-dark">
        <h1 class="postcard__title green">Beginner</h1>
        <div class="postcard__subtitle small">Aprender juntos, equivocarse juntos, crecer juntos.
        </div>
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia,
        sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
        <ul class="postcard__tagbox">
          <li class="tag__item">Presencial o Online</li>
          <li class="tag__item">Class duration 60 mins</li>
          <li class="tag__item play green">
            <router-link to="/contact">Get in touch</router-link>
          </li>
        </ul>
      </div>
    </article>
    <article class="postcard light yellow">
      <p class="postcard__img_link">
        <img class="postcard__img" src="https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o" alt="Image Title" />
      </p>
      <div class="postcard__text t-dark">
        <h1 class="postcard__title yellow">Job Interview and CV</h1>
        <div class="postcard__subtitle small">La comunicación lo es todo.
        </div>
        <div class="postcard__bar"></div>
        <div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur
        odit minima enim, commodi quia, doloribus eius!</div>
        <ul class="postcard__tagbox">
          <li class="tag__item">Presencial o Online</li>
          <li class="tag__item">Class duration 60 mins</li>
          <li class="tag__item play yellow">
            <router-link to="/contact">Get in touch</router-link>
          </li>
        </ul>
      </div>
    </article>
  </div>
</section>
    <FooterSection/>
  </div>
</template>

<style>
.postcard .t-dark {
  color: #18151f;
}

.light {
  background: #f3f5f7;
}

p,
p:hover {
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

#pageHeaderTitle {
  margin: 2rem 0;
  text-transform: uppercase;
}

/* Cards */
.postcard {
  flex-wrap: wrap;
  display: flex;
  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
  border-radius: 10px;
  margin: 0 0 2rem 0;
  overflow: hidden;
  position: relative;
}

.postcard h1 {
  margin-bottom: 0.5rem;
  line-height: 1.2;
}
.postcard .small {
  font-size: 80%;
  padding-left: 30px;
}
.postcard .postcard__title {
  padding-left: 30px;
}

.postcard .t-dark {
  color: #18151f;
}
.postcard .postcard__img {
  max-height: 180px;
  width: 100%;
  object-fit: cover;
  position: relative;
}
.postcard .postcard__img_link {
  display: contents;
}
.postcard .postcard__bar {
  width: 50px;
  height: 10px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #424242;
  transition: width 0.2s ease;
  margin-left: 30px;
}
.postcard .postcard__text {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
}

.postcard .postcard__preview-txt {
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  height: 100%;
  color: rgb(85, 5, 26);
  margin-left: 30px;
  font-size: 20px;
}
.postcard .postcard__tagbox {
  display: flex;
  flex-flow: row wrap;
  font-size: 14px;
  margin: 20px 0 0 0;
  padding-left: 30px;

}
.contact {
  display: inline-block;
  border-radius: 25px;
  padding: 2.5px 10px;
  margin: 0 5px 5px 0;
  cursor: default;
  user-select: none;
  background: #a90934;
  color: white;
}

.contact:hover {
  background-color: #55051a;
  transform: scale(1.02);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.postcard .postcard__tagbox .tag__item {
  display: inline-block;
  background: rgba(83, 83, 83, 0.4);
  color: rgb(85, 5, 26);
  border-radius: 25px;
  padding: 2.5px 10px;
  margin: 0 5px 5px 0;
  cursor: default;
  user-select: none;
  transition: background-color 0.3s;
}
.postcard .postcard__tagbox .tag__item:hover {
  background: rgba(83, 83, 83, 0.8);
}
.postcard:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(-70deg, #424242, transparent 50%);
  opacity: 1;
  border-radius: 10px;
}
.postcard:hover .postcard__bar {
  width: 150px;
}

@media screen and (min-width: 769px) {
  .postcard {
    flex-wrap: inherit;
  }
  .postcard .postcard__title {
    font-size: 2rem;
  }
  .postcard .postcard__tagbox {
    justify-content: start;
  }
  .postcard .postcard__img {
    max-width: 300px;
    max-height: 100%;
    transition: transform 0.3s ease;
  }
  .postcard .postcard__text {
    padding: 3rem;
    width: 100%;
  }
  .postcard .media.postcard__text:before {
    content: "";
    position: absolute;
    display: block;
    background: #18151f;
    top: -20%;
    height: 130%;
    width: 55px;
  }
  .postcard:hover .postcard__img {
    transform: scale(1.1);
  }
  .postcard:nth-child(2n + 1) {
    flex-direction: row;
  }
  .postcard:nth-child(2n + 0) {
    flex-direction: row-reverse;
  }
  .postcard:nth-child(2n + 1) .postcard__text::before {
    left: -12px !important;
    transform: rotate(4deg);
  }
  .postcard:nth-child(2n + 0) .postcard__text::before {
    right: -12px !important;
    transform: rotate(-4deg);
  }
}
@media screen and (min-width: 1024px) {
  .postcard__text {
    padding: 2rem 3.5rem;
  }
  .postcard__text:before {
    content: "";
    position: absolute;
    display: block;
    top: -20%;
    height: 130%;
    width: 55px;
  }
  .postcard.dark .postcard__text:before {
    background: #18151f;
  }
  .postcard.light .postcard__text:before {
    background: #e1e5ea;
  }
}
/* COLORS */
.postcard .postcard__tagbox .green.play:hover {
  background: #79dd09;
  color: black;
}

.green .postcard__title:hover {
  color: #79dd09;
}

.green .postcard__bar {
  background-color: #79dd09;
}

.green::before {
  background-image: linear-gradient(
    -30deg,
    rgba(121, 221, 9, 0.1),
    transparent 50%
  );
}

.green:nth-child(2n)::before {
  background-image: linear-gradient(
    30deg,
    rgba(121, 221, 9, 0.1),
    transparent 50%
  );
}

.postcard .postcard__tagbox .blue.play:hover {
  background: #0076bd;
}

.blue .postcard__title:hover {
  color: #0076bd;
}

.blue .postcard__bar {
  background-color: #0076bd;
}

.blue::before {
  background-image: linear-gradient(
    -30deg,
    rgba(0, 118, 189, 0.1),
    transparent 50%
  );
}

.blue:nth-child(2n)::before {
  background-image: linear-gradient(
    30deg,
    rgba(0, 118, 189, 0.1),
    transparent 50%
  );
}

.postcard .postcard__tagbox .red.play:hover {
  background: #bd150b;
}

.red .postcard__title:hover {
  color: #bd150b;
}

.red .postcard__bar {
  background-color: #bd150b;
}

.red::before {
  background-image: linear-gradient(
    -30deg,
    rgba(189, 21, 11, 0.1),
    transparent 50%
  );
}

.red:nth-child(2n)::before {
  background-image: linear-gradient(
    30deg,
    rgba(189, 21, 11, 0.1),
    transparent 50%
  );
}

.postcard .postcard__tagbox .yellow.play:hover {
  background: #bdbb49;
  color: black;
}

.yellow .postcard__title:hover {
  color: #bdbb49;
}

.yellow .postcard__bar {
  background-color: #bdbb49;
}

.yellow::before {
  background-image: linear-gradient(
    -30deg,
    rgba(189, 187, 73, 0.1),
    transparent 50%
  );
}

.yellow:nth-child(2n)::before {
  background-image: linear-gradient(
    30deg,
    rgba(189, 187, 73, 0.1),
    transparent 50%
  );
}

@media screen and (min-width: 769px) {
  .green::before {
    background-image: linear-gradient(
      -80deg,
      rgba(121, 221, 9, 0.1),
      transparent 50%
    );
  }
  .green:nth-child(2n)::before {
    background-image: linear-gradient(
      80deg,
      rgba(121, 221, 9, 0.1),
      transparent 50%
    );
  }
  .blue::before {
    background-image: linear-gradient(
      -80deg,
      rgba(0, 118, 189, 0.1),
      transparent 50%
    );
  }
  .blue:nth-child(2n)::before {
    background-image: linear-gradient(
      80deg,
      rgba(0, 118, 189, 0.1),
      transparent 50%
    );
  }
  .red::before {
    background-image: linear-gradient(
      -80deg,
      rgba(189, 21, 11, 0.1),
      transparent 50%
    );
  }
  .red:nth-child(2n)::before {
    background-image: linear-gradient(
      80deg,
      rgba(189, 21, 11, 0.1),
      transparent 50%
    );
  }
  .yellow::before {
    background-image: linear-gradient(
      -80deg,
      rgba(189, 187, 73, 0.1),
      transparent 50%
    );
  }
  .yellow:nth-child(2n)::before {
    background-image: linear-gradient(
      80deg,
      rgba(189, 187, 73, 0.1),
      transparent 50%
    );
  }
}
</style>
<script>
import NavBar from '@/components/NavBar.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  name: 'ServiceView',
  components: {
    NavBar,
    FooterSection,
  },
};
</script>
