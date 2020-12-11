<template>
  <div class="">
    <h1>This is an about page</h1>
    <div class="">
    <div class="row m-1" style="">
      <button @click="clickBoard(0,0)" class="col-4 bg-info" style="height: 100px;">{{this.tictactoeBoard[0][0]}}</button>
      <button @click="clickBoard(0,1)" class="col-4 bg-primary" style="height: 100px">{{this.tictactoeBoard[0][1]}}</button>
      <button @click="clickBoard(0,2)" class="col-4 bg-warning" style="height: 100px">{{this.tictactoeBoard[0][2]}}</button>
    </div>
    <div class="row m-1">
      <button @click="clickBoard(1,0)" class="col-4 bg-info" style="height: 100px;">{{this.tictactoeBoard[1][0]}}</button>
      <button @click="clickBoard(1,1)" class="col-4 bg-primary" style="height: 100px">{{this.tictactoeBoard[1][1]}}</button>
      <button @click="clickBoard(1,2)" class="col-4 bg-warning" style="height: 100px">{{this.tictactoeBoard[1][2]}}</button>
    </div>
    <div class="row m-1">
      <button @click="clickBoard(2,0)" class="col-4 bg-info" style="height: 100px;">{{this.tictactoeBoard[2][0]}}</button>
      <button @click="clickBoard(2,1)" class="col-4 bg-primary" style="height: 100px">{{this.tictactoeBoard[2][1]}}</button>
      <button @click="clickBoard(2,2)" class="col-4 bg-warning" style="height: 100px">{{this.tictactoeBoard[2][2]}}</button>
    </div>
    </div>
    <div>
      <div v-if="player1Win === true">
        PLAYER 1 WIN
      </div>
      <div v-else-if="player2Win === true">
        PLAYER 2 WIN
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'About',
  data () {
    return {
      tictactoeBoard: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      isWin: false,
      player1Win: false,
      player2Win: false
    }
  },
  methods: {
    clickBoard (row, col) {
      if (!this.isWin) {
        this.$socket.emit('gameBoard', { row, col, room: this.room })
      }
    },
    checkWin () {
      if (this.tictactoeBoard[0][0] === 'X' && this.tictactoeBoard[0][0] === this.tictactoeBoard[0][1] && this.tictactoeBoard[0][1] === this.tictactoeBoard[0][2]) {
        this.isWin = true
        this.player2Win = true
        console.log('X win')
      }
      // selectWinnerBoxes(box1,box2,box3);
      if (this.tictactoeBoard[1][0] === 'X' && this.tictactoeBoard[1][0] === this.tictactoeBoard[1][1] && this.tictactoeBoard[1][0] === this.tictactoeBoard[1][2]) {
        this.isWin = true
        this.player2Win = true
        console.log('X win')
      }
      // selectWinnerBoxes(box4,box5,box6);
      if (this.tictactoeBoard[2][0] === 'X' && this.tictactoeBoard[2][0] === this.tictactoeBoard[2][1] && this.tictactoeBoard[2][0] === this.tictactoeBoard[2][2]) {
        this.isWin = true
        this.player2Win = true
        console.log('X win')
      }
      // selectWinnerBoxes(box7,box8,box9);
      if (this.tictactoeBoard[0][0] === 'X' && this.tictactoeBoard[0][0] === this.tictactoeBoard[1][0] && this.tictactoeBoard[0][0] === this.tictactoeBoard[2][0]) {
        this.isWin = true
        this.player2Win = true
        console.log('X win')
      }
      // selectWinnerBoxes(box1,box4,box7);
      if (this.tictactoeBoard[0][1] === 'X' && this.tictactoeBoard[0][1] === this.tictactoeBoard[1][1] && this.tictactoeBoard[0][1] === this.tictactoeBoard[2][1]) {
        this.isWin = true
        this.player2Win = true
        console.log('X win')
      }
      // selectWinnerBoxes(box2,box5,box8);
      if (this.tictactoeBoard[0][2] === 'X' && this.tictactoeBoard[0][2] === this.tictactoeBoard[1][2] && this.tictactoeBoard[0][2] === this.tictactoeBoard[2][2]) {
        this.isWin = true
        this.player2Win = true
        console.log('X win')
      }
      // selectWinnerBoxes(box3,box6,box9);
      if (this.tictactoeBoard[0][0] === 'X' && this.tictactoeBoard[0][0] === this.tictactoeBoard[1][1] && this.tictactoeBoard[0][0] === this.tictactoeBoard[2][2]) {
        this.isWin = true
        this.player2Win = true
        console.log('X win')
      }
      // selectWinnerBoxes(box1,box5,box9);
      if (this.tictactoeBoard[0][2] === 'X' && this.tictactoeBoard[0][2] === this.tictactoeBoard[1][1] && this.tictactoeBoard[0][2] === this.tictactoeBoard[2][1]) {
        this.isWin = true
        this.player2Win = true
        console.log('X win')
      }
      // selectWinnerBoxes(box3,box5,box7);
      if (this.tictactoeBoard[0][0] === 'O' && this.tictactoeBoard[0][0] === this.tictactoeBoard[0][1] && this.tictactoeBoard[0][1] === this.tictactoeBoard[0][2]) {
        this.isWin = true
        this.player1Win = true
        console.log('O win')
      }
      // selectWinnerBoxes(box1,box2,box3);
      if (this.tictactoeBoard[1][0] === 'O' && this.tictactoeBoard[1][0] === this.tictactoeBoard[1][1] && this.tictactoeBoard[1][0] === this.tictactoeBoard[1][2]) {
        this.isWin = true
        this.player1Win = true
        console.log('O win')
      }
      // selectWinnerBoxes(box4,box5,box6);
      if (this.tictactoeBoard[2][0] === 'O' && this.tictactoeBoard[2][0] === this.tictactoeBoard[2][1] && this.tictactoeBoard[2][0] === this.tictactoeBoard[2][2]) {
        this.isWin = true
        this.player1Win = true
        console.log('O win')
      }
      // selectWinnerBoxes(box7,box8,box9);
      if (this.tictactoeBoard[0][0] === 'O' && this.tictactoeBoard[0][0] === this.tictactoeBoard[1][0] && this.tictactoeBoard[0][0] === this.tictactoeBoard[2][0]) {
        this.isWin = true
        this.player1Win = true
        console.log('O win')
      }
      // selectWinnerBoxes(box1,box4,box7);
      if (this.tictactoeBoard[0][1] === 'O' && this.tictactoeBoard[0][1] === this.tictactoeBoard[1][1] && this.tictactoeBoard[0][1] === this.tictactoeBoard[2][1]) {
        this.isWin = true
        this.player1Win = true
        console.log('O win')
      }
      // selectWinnerBoxes(box2,box5,box8);
      if (this.tictactoeBoard[0][2] === 'O' && this.tictactoeBoard[0][2] === this.tictactoeBoard[1][2] && this.tictactoeBoard[0][2] === this.tictactoeBoard[2][2]) {
        this.isWin = true
        this.player1Win = true
        console.log('O win')
      }
      // selectWinnerBoxes(box3,box6,box9);
      if (this.tictactoeBoard[0][0] === 'O' && this.tictactoeBoard[0][0] === this.tictactoeBoard[1][1] && this.tictactoeBoard[0][0] === this.tictactoeBoard[2][2]) {
        this.isWin = true
        this.player1Win = true
        console.log('O win')
      }
      // selectWinnerBoxes(box1,box5,box9);
      if (this.tictactoeBoard[0][2] === 'O' && this.tictactoeBoard[0][2] === this.tictactoeBoard[1][1] && this.tictactoeBoard[0][2] === this.tictactoeBoard[2][1]) {
        this.isWin = true
        this.player1Win = true
        console.log('O win')
      }
      // selectWinnerBoxes(box3,box5,box7);
    }
  },
  sockets: {
    connection () {
      console.log('client connected')
    },
    init (payload) {
      console.log(payload)
    },
    changeBoard (board) {
      if (this.isWin) {

      } else {
        this.tictactoeBoard = board
        this.checkWin()
      }
    }
  },
  computed: {
    room () {
      return this.$store.state.room
    }
  }
}
</script>
