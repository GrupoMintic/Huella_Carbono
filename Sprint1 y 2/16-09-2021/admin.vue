<template>
  <div class="row justify-content-center">
    <div class="col-md-4">
      <h3 class="text-center">EDIT ADMIN (Calculo de Huella de Carbono)</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>* Vivienda</label>
          <br>
          <label>1. Cuántas personas viven en su núcleo familiar (RELEVANCIA)</label>
          <input
            type="number"
            class="form-control"
            width="30"
            height="30"
            v-model="calc.personas"
            required
          />
        </div>
        <div class="form-group">
          <label>2. Cuántos vatios consumen en su hogar (RELEVANCIA)</label>
          <input
            type="number"
            class="form-control"
            v-model="calc.vatios"
            required
          />
        </div>
        <div class="form-group">
          <label>3. Indique la cantidad de metros de gas consumidos (RELEVANCIA)</label>
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
          <label>1. Posees Vehiculo propio (RELEVANCIA)</label>
          <input
            type="number"
            class="form-control"
            v-model="calc.transp"
            required
          />
        </div>
        <div class="form-group">
          <label>2. Cantidad de galones al mes (RELEVANCIA)</label>
          <input
            type="number"
            class="form-control"
            v-model="calc.gals"
            required
          />          
        </div>
        <div class="form-group">
          <button class="btn btn-calc btn-block">GUARDAR CAMBIOS</button>        
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