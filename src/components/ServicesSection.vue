<template>
  <header>
    <h4>EXECUTIVE LANGUAGE SERVICES FOR PROFESSIONALS</h4>
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
    <p class='contact'><router-link to='/contact' class='link'>Get in touch</router-link></p>
  </header>
</template>

<style>
header {
  display: flex;
  flex-flow: column;
  align-items: center;
}

header h4 {
  font-size: 20px;
  color: rgb(85, 5, 26);
}

#mosaic_wrapper {
  display: flex;
}

#mosaic_wrapper .panel {
  width: 200px;
  height: 300px;
  margin: 5px;
  background: url('@/assets/Maldives.jpeg')
    no-repeat 280px 0 fixed;
}

button {
  background-color: #a90934;
  color: rgb(255, 255, 255);
  padding: 10px 20px 10px 20px;
  width: 200px;
  border: none;
  position: relative;
  top: 250px;
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
  width: 400px;
  text-align: justify;
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
  width: 650px;
  text-align: justify;
  margin-left: 150px;
  margin-bottom: 40px;
  margin-top: 30px;
  display: flex;
  font-style: italic;
}
</style>
