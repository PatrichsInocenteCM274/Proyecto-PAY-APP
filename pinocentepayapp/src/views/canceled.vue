

// HTML CODE:  --------------------------------------------------------------
<template>
  <div class="Confirm">
          <div class="wrapper fadeInDown">
              <div id="formContent">
                <div class="imagen-logo fadeIn first">
                  <img  src="@/assets/canceled.png" id="icon" alt="User Icon" />
                </div>
                <div class="info-box fadeIn second">
                  <p>FECHA Y HORA DE CANCELACIÓN</p>
                    <p>{{time}}</p>
                    <!-- Agrega más información según tus necesidades -->
                </div>
                <form v-on:submit.prevent="checkout">
                  <input type="submit" class="fadeIn fourth" value="Volver">
                </form>
              </div>
            </div>
  </div>
</template>
// ----------------------------------------------------------------------------


// JAVASCRIPT CODE:  ----------------------------------------------------------------
<script>
export default {
  data() {
    return {
      time: new Date().toLocaleString(), // Inicializa la variable en el bloque data
    };
  },
  methods:{
    checkout(){
      this.$router.push('/checkout');
    }
  }
};
</script>
// ----------------------------------------------------------------------------
