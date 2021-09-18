<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">CALCULO DE HUELLA DE CARBONO</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Ingrese su nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="calc.personas"
            required
          />
        </div>        
        <div class="form-group">
          <label>* Vivienda</label>
          <br>
          <label>1. Cuántas personas viven en su núcleo familiar</label>
          <input
            type="number"
            class="form-control"
            v-model="calc.personas"
            required
          />
        </div>
        <div class="form-group">
          <label>2. Cuántos vatios consumen en su hogar</label>
          <input
            type="number"
            class="form-control"
            v-model="calc.vatios"
            required
          />
        </div>
        <div class="form-group">
          <label>3. Indique la cantidad de metros de gas consumidos</label>
          <input
            type="number"
            class="form-control"
            v-model="calc.gas"
            required
          />
        </div>
        <div class="form-group">
          <label>* Transporte</label>
          <br>
          <label>1. Posees Vehiculo propio  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </label>   
            <label for="SI">SI &nbsp; </label>
            <input type="radio" id="html" name="tiene_carro" value="SI" checked = "true">
            &nbsp; 
            <label for="NO">NO &nbsp; </label>                      
            <input type="radio" id="css" name="tiene_carro" value="NO">
        </div>
        <div class="form-group">
          <label>2. Cantidad de galones al mes</label>
          <input
            type="number"
            class="form-control"
            v-model="calc.gals"
            required
          />          
        </div>
        <div class="form-group">
          <button class="btn btn-calc btn-block">Calcular Huellas</button>        
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { calc: { personas: "", vatios: "", gas: "", transp: "", gals: "" } };
  },
  methods: { handleSubmitForm() {} },
};
</script>