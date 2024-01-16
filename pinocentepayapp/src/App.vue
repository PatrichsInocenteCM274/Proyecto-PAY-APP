<template>
  <div id="app">
   
    <div class="navbar-container">
      <div class="navbar-content">
        <router-link to="/checkout" >
         <i class='bx bx-cart-alt bx-md'></i>
        </router-link>
        <router-link to="/form">
          <i class='bx bx-search-alt bx-md'></i>
        </router-link>
        <router-link to="/report">
          <i class='bx bx-spreadsheet bx-md'></i>
        </router-link>

      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
data: () => ({
      prueba: ''
  })
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');
.navbar-container {
  width: 100%;
  position: flex;
  top: 0;
  background-color: rgb(255, 174, 0);
  border: 0.5px solid white;
  .navbar-content {
    padding: 15px;
    display: flex;
    justify-content: center;
    a {
      color: rgba(163, 163, 163);
      &.router-link-exact-active {
        color: rgba(255, 131, 62);
      }
      margin-left: 20px;
      margin-right: 20px;
    }
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  font-family: 'Josefin Sans', sans-serif;
  margin: 0px;
  padding: 0px;
}

</style>
