<template>
  <header>
    <h3>EXECUTIVE LANGUAGE SERVICES FOR PROFESSIONALS</h3>
    <div id="mosaic_wrapper">
      <div class="panel"><button>Beginner</button></div>
      <div class="panel"><button>Conversation</button></div>
      <div class="panel"><button>Business</button></div>
      <div class="panel"><button>Job Interview CV</button></div>
    </div>
    <div class="whoweare">
      <div class="textboxone">
        <p>
          La fluidez del inglés en el mercado laboral actual es cada vez más
          importante y nos encontramos con una gran demanda de cursos preparados
          a medida. Lotos Languages ofrece cursos de inglés para adultos, tanto
          a nivel individual como para grupos. Todos los cursos son
          personalizados para adaptarse a las necesidades individuales de
          nuestros clientes.
        </p>
      </div>
      <div class="textboxtwo">
        <div class="portrait"></div>
        <p>
          Para tener presencia en el mercado internacional es imprescindible la
          comunicación perfecta entre los interlocutores. En Lotos Languages
          disponemos tanto de intérpretes para reuniones y conferencias como de
          traductores de contenido on-line y off-line.
        </p>
      </div>
    </div>
  </header>
</template>

<style>
header {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 40px 0 40px 0;
}

#mosaic_wrapper {
  display: flex;
  margin: 40px 0 40px 0;
}

#mosaic_wrapper .panel {
  width: 200px;
  height: 350px;
  margin: 5px;
  background: url('https://static.wixstatic.com/media/ccd850b43b8e4e6bb634c30e8963ec77.jpg/v1/fill/w_920,h_525,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Camino%20r%C3%BAstico%20Beach.jpg')
    no-repeat 280px 0 fixed;
}

button {
  background-color: #a90934;
  color: rgb(255, 255, 255);
  padding: 10px 20px 10px 20px;
  width: 200px;
  border: none;
  position: relative;
  top: 280px;
  font-size: 15px;
}

button:hover {
  background-color: #55051a;
  transform: scale(1.02);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.whoweare {
  display: flex;
  flex-direction: column;
}
.textboxone {
  width: 450px;
  text-align: justify;
  font-size: 20px;
}

.portrait {
  width: 150px;
  height: 150px;
  background-image: url('@/assets/portrait.jpeg');
  background-size: cover;
  border-radius: 50%;
  padding-right: 130px;
  margin-right: 130px;
}

.textboxtwo {
  width: 700px;
  text-align: justify;
  margin-left: 150px;
  margin-bottom: 40px;
  margin-top: 30px;
  display: flex;
  font-style: italic;
  font-size: 20px;
}
</style>
