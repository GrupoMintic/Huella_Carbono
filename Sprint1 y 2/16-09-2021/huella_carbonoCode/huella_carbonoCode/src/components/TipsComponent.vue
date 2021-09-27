<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">¿ Qué es la Huella de Carbono ?</h3>

      <div class="card" style= "background:white;color:black">
        
        <div class="card-body">
          <form @submit.prevent="handleSubmitForm">
            <div class="form-group mt-1">
              <p>
              La huella de carbono es un indicador que representa la cantidad total de Gases de Efecto Invernadero (GEI) que emite directa o indirectamente un individuo, una organización, la realización de un evento o la fabricación de un producto. 
              Su unidad es la masa (kilogramos o toneladas) de Dióxido de Carbono equivalente (CO2-e)
              </p> 
                <img width="500" height="400" src="../assets/img/bosque1.jpg">
            </div>
          </form>
        </div>

      </div>
      <h3 class="text-center">Tips de Cuidado Ambiental</h3>

      <div class="card" style= "background:grey;color:blac">
        
        <div class="card-body">
          <form @submit.prevent="handleSubmitForm">
            <div class="form-group mt-1">
              <label>Muevete bien</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>  

</template>




<script>
export default {
  data() {
    return {};
  },
};
</script>