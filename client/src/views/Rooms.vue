<template>
    <div class="container d-flex flex-wrap">
      <div>
        <h1 style="color:Tomato;">LETS PLAY AND CHILL!!</h1>
        <img src="../assets/rooms.png" style="width: 50%; margin-bottom: 5%;">
      </div>
      <div class="row row-cols-4">
        <div class="col">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="">
                <img src="../assets/tictac.jpg" class="card-img img-fluid" style="width: 700px; height: 200px">
              </div>
              <div class="">
                <div class="card-body">
                  <h4 class="card-title">Room 1</h4>
                  <button @click.prevent="join('room1')" type="button" class="btn btn-warning">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="">
                <img src="../assets/project.jpg" class="card-img img-fluid" style="width: 700px; height: 200px">
              </div>
              <div class="">
                <div class="card-body">
                  <h4 class="card-title">Room 2</h4>
                  <button @click.prevent="join('room2')" type="button" class="btn btn-warning">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="">
                <img src="../assets/card1.jpg" class="card-img img-fluid" style="width: 700px; height: 200px">
              </div>
              <div class="">
                <div class="card-body">
                  <h4 class="card-title">Room 3</h4>
                  <button @click.prevent="join('room3')" type="button" class="btn btn-warning">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="">
                <img src="../assets/card2.jpg" class="card-img img-fluid" style="width: 700px; height: 200px">
              </div>
              <div class="">
                <div class="card-body">
                  <h4 class="card-title">Room 4</h4>
                  <button @click.prevent="join('room4')" type="button" class="btn btn-warning">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="">
                <img src="../assets/card2.jpg" class="card-img img-fluid" style="width: 700px; height: 200px">
              </div>
              <div class="">
                <div class="card-body">
                  <h4 class="card-title">Room 5</h4>
                  <button @click.prevent="join('room5')" type="button" class="btn btn-warning">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="">
                <img src="../assets/card2.jpg" class="card-img img-fluid" style="width: 700px; height: 200px">
              </div>
              <div class="">
                <div class="card-body">
                  <h4 class="card-title">Room 6</h4>
                  <button @click.prevent="join('room6')" type="button" class="btn btn-warning">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="">
                <img src="../assets/card2.jpg" class="card-img img-fluid" style="width: 700px; height: 200px">
              </div>
              <div class="">
                <div class="card-body">
                  <h4 class="card-title">Room 7</h4>
                  <button @click.prevent="join('room7')" type="button" class="btn btn-warning">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="">
                <img src="../assets/card2.jpg" class="card-img img-fluid" style="width: 700px; height: 200px">
              </div>
              <div class="">
                <div class="card-body">
                  <h4 class="card-title">Room 8</h4>
                  <button @click.prevent="join('room8')" type="button" class="btn btn-warning">Join</button>
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
  name: 'Rooms',
  methods: {
    join (room) {
      console.log(room, '<<<< room')
      this.$socket.emit('joinRoom', room)
    }
  }
}
</script>

<style>
  .container{
    font-family: 'Amatic SC', cursive;
  }
</style>
