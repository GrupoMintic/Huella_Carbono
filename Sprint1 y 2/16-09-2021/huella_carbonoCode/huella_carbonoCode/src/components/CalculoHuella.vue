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
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { calc: { personas: "", vatios: "", gas: "" } };
  },
  methods: { handleSubmitForm() {} },
};
</script>