<template>
    <section class="questions">
      <h2>Do You Have Any Questions?</h2>
      <div>
        <input class="subscribe" type="submit" value="Send us a message">
      </div>
    </section>
</template>

<style>
.questions {
  text-align: center;
  background-color: #c6c398;
  height: 200px;
  padding-top: 50px;
  margin: 40px;
}

.subscribe {
  background-color: #a90934;
  color: rgb(255, 255, 255);
  padding: 10px 30px 10px 30px;
  border: none;
  margin-top: 20px;
  border-radius: 25px;
}

.subscribe:hover {
  background-color: #55051a;
  transform: scale(1.02);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
