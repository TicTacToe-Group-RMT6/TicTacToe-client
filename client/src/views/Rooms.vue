<template>
  <div class="container d-flex flex-wrap">
    <div>
      <img src="../assets/rooms.png" style="width: 50%; margin-bottom: 5%;">
      <button type="button" class="btn btn-outline-danger" style="justify-content: flex-end;">Create Room</button>
    </div>
    <div class="row row-cols-4">
      <div class="col">
        <div class="card mb-3" style="max-width: 700px;">
          <div class="row no-gutters">
            <div class="">
              <img src="../assets/tictac.jpg" class="card-img">
            </div>
            <div class="">
              <div class="card-body">
                <h5 class="card-title">Title Room</h5>
                <p class="card-text"><small class="text-muted">Username</small></p>
                <button type="button" class="btn btn-outline-warning">Join</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rooms'
}
</script>

<style>
  .room{
    min-width: 200px;
  }
  /* .container{
      max-width: 1140px;
      flex-direction: columns;
      align-content: center;
      justify-content: center;
      align-items: flex-start;
  } */
</style>
