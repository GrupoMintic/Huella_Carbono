<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Log in</h3>

      <div align="center"><img src="../assets/img/admin.jpg" alt="" ></div>
      <div class="card" style= "background:green;color:white">
        
        <div class="card-body">
          <form @submit.prevent="handleSubmitForm">
            <div class="form-group mt-1">
              <label>Usuario</label>
              <input
                type="text"
                class="form-control"
                v-model="student.Usuario"
                required
              />
            </div>
            <!-- <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="student.email"
            required
          />
        </div> -->
            <div class="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="text"
                class="form-control mt-1"
                v-model="student.Pass"
                required
              />
            </div>
            <div class="form-group mt-3">
              <button class="btn btn-primary btn-block">Ingresar</button>
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
    return {
      student: {
        Nombre: "",
        email: "",
        Telefono: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {},
  },
};
</script>