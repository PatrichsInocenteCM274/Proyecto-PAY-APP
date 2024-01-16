

// HTML CODE:  --------------------------------------------------------------
<template>
  <div class="Confirm">
          <div class="wrapper fadeInDown">
              <div id="formContent">
                <div class="imagen-logo fadeIn first">
                  <img  src="@/assets/report.png" id="icon" alt="User Icon" />
                </div>
                <!-- Search Form -->
                <form v-on:submit2.prevent="search">
                  <input type="text" id="id_transaction" class="fadeIn second" name="id_transaction" placeholder="Ingresa ID de transacción" v-model="id_transaction">                               
                  <input type="button" class="fadeIn second" value="Search" @click.prevent="search">
                </form>
                <textarea id="mensaje" class="fadeIn second" name="mensaje" placeholder="id_transaction  |  state_transaction  |  time" v-model="mensaje" rows="12"></textarea>
              </div>
            </div>
  </div>
</template>
// ----------------------------------------------------------------------------


// JAVASCRIPT CODE:  ----------------------------------------------------------------
<script>
import axios from 'axios';
export default {
  name: 'about',
  components: {
    
  },
  data: function(){
    return {
      id_transaction: "",
      mensaje: ""
    }
  },
  methods:{
    async search(){
      this.mensaje = 'id_transaction  |  state_transaction  |  time'
      axios.post('http://localhost:5000/history_transaction', "id_transaction="+this.id_transaction)
        .then( data =>{
                for (const item of data.data) {
                  this.mensaje += "\n" + item.id_transaction.substring(0, 15) +  "|" + item.state_transaction + "|" + 
                  new Date(item.time).toLocaleString()
                }
      })
    }
  }
}
</script>
// ----------------------------------------------------------------------------

// STYLE CODE: ----------------------------------------------------------------
<style module>

input[type=button], input[type=submit2], input[type=reset]  {
  background-color: #0daeff;
  border: none;
  color: white;
  padding: 15px;
  width: 100px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 16px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 10px 0 rgba(95,186,233,0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 40px 20px 10px 5px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

</style>