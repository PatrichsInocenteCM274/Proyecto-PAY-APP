

// HTML CODE:  --------------------------------------------------------------
<template>
  <div class="checkout">
          <div class="wrapper fadeInDown">
              <div id="formContent">
                <div class="imagen-logo fadeIn first">
                  <img  src="@/assets/logo.png" id="icon" alt="User Icon" />
                </div>

                <!-- checkout Form -->
                <form v-on:submit.prevent="pay">
                  
                    <input class="input-group fadeIn first" type="text" id="amount" name="amount" v-model="amount" placeholder="Monto">

                    <input class="input-group fadeIn first" type="text" id="currency" name="currency" v-model="currency" placeholder="Moneda (PEN,USD,EUR)">

                  <div class="fadeIn second">
                    <input type="submit" value="Pay">
                  </div>
                </form>

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
      amount: "",
      currency: ""
    }
  },
  methods:{
    pay(){
      console.log("amount="+this.amount+" currency="+this.currency);
      
        axios.post(`http://localhost:5000/create-checkout-session`, "amount="+this.amount+"&currency="+this.currency)
        .then( data =>{
           console.log(data);
           window.location.href = data.data.url
        })
    },
  }
}
</script>
// ----------------------------------------------------------------------------


// CSS CODE:  ----------------------------------------------------------------
<style lang="less">


/* BASIC */

html {
  background-color: gainsboro;
}

body {                                                                                                                                                                                                
  font-family: "Poppins", sans-serif;
  height: 100vh;
}

/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 0px;

}

#formContent {
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRShZ6oYV7eyYpomTfxlk0BOe7F31hIRHmyGQ&usqp=CAU);
  width: 100%;
  max-width: 450px;
  padding: 10px;
  text-align: center;
  margin: 0px 0px 10px 5px;
  .imagen{
    margin-top: 0;
    padding: 10px;
  }
  align-items: center;
}

/* FORM TYPOGRAPHY*/

input[type=button], input[type=submit], input[type=reset]  {
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
  margin: 40px 20px 200px 5px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.imagen-logo{
  align-items: center;
  img{
    
    margin:10px;
    border-radius: 20px;
  }
}

input[type=text]{
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 8px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  
  border: 0.5px solid #5f5454;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type=text]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type=text]:placeholder {
  color: #cccccc;
}

/* ANIMATIONS */

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.fadeIn {
  margin-top: 10px;
  opacity:0;
  -webkit-animation:fadeIn ease-in 1;
  -moz-animation:fadeIn ease-in 1;
  animation:fadeIn ease-in 1;

  -webkit-animation-fill-mode:forwards;
  -moz-animation-fill-mode:forwards;
  animation-fill-mode:forwards;

  -webkit-animation-duration:1s;
  -moz-animation-duration:1s;
  animation-duration:1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.2s;
  -moz-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.3s;
  -moz-animation-delay: 0.3s;
  animation-delay: 0.3s;
}


*:focus {
    outline: none;
} 

#icon {
  width:70%;
}


</style>
// ----------------------------------------------------------------------------