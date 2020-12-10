<template>
  <div class="container">
    <form class="form-login">
      <div>
        <img src="../assets/wew.jpg" class="front-img" height="350px">
      </div>
      <h1 class="mt-3">{{ title }}</h1>
      <div class="form-group text-start">
        <h3 class="mt-4" for="exampleInputEmail1">Username</h3>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="d-grid gap-2">
        <button type="submit" class="btn btn-dark mt-3">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // },
  computed: {
    title () {
      return this.$store.state.title
    }
  }
}
</script>
<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 5%;
    margin-top: -3%;
  }
  .form-login {
    font-family: 'Amatic SC', cursive;
    box-shadow: 0px 0px 3px;
    padding: 20px;
    border-radius: 10px;
  }
  .front-img {
    border-radius: 10px;
  }
</style>
