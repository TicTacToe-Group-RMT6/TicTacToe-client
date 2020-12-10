<template>
  <div class="container">
    <form>
      <div>
        <img src="../assets/tictac.jpg" class="front-img" height="350px">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Username</label><br>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
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
  }
</style>
