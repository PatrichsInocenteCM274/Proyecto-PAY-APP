

// HTML CODE:  --------------------------------------------------------------
<template>
  <div class="Confirm">
          <div class="wrapper fadeInDown">
              <div id="formContent">
                <div class="imagen-logo fadeIn first">
                  <img  src="@/assets/confirm.png" id="icon" alt="User Icon" />
                </div>
                <div class="info-box fadeIn second">
                    <p>FECHA Y HORA DE CONFIRMACIÓN</p>
                    <p>{{ time }}</p>
                    <!-- Agrega más información según tus necesidades -->
                </div>

                <form v-on:submit.prevent="checkout">
                  <input type="submit" class="fadeIn second" value="Volver">
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


// CSS CODE:  ----------------------------------------------------------------
<style lang="less">
.info-box {
  background-color: #355feb; /* Color celeste */
  padding: 10px;
  margin-bottom: 10px;
  color: #fff; /* Color del texto */
  border-radius: 10px; /* Ajusta el valor según la curvatura que desees */
}
</style>
// ----------------------------------------------------------------------------