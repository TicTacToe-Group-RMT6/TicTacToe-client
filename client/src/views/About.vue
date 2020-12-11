<template>
  <div class="game">
    <span id= "turn"> Tic Tac Toe</span>
    <div class="box" @click="clickBoard(0,0)">{{this.tictactoeBoard[0][0]}} </div>
        <div class="box" @click="clickBoard(0,1)"> {{this.tictactoeBoard[0][1]}} </div>
        <div class="box" @click="clickBoard(0,2)">{{this.tictactoeBoard[0][2]}} </div>
        <div class="box" @click="clickBoard(1,0)">{{this.tictactoeBoard[1][0]}} </div>
        <div class="box" @click="clickBoard(1,1)">{{this.tictactoeBoard[1][1]}} </div>
        <div class="box" @click="clickBoard(1,2)">{{this.tictactoeBoard[1][2]}} </div>
        <div class="box" @click="clickBoard(2,0)">{{this.tictactoeBoard[2][0]}} </div>
        <div class="box" @click="clickBoard(2,1)">{{this.tictactoeBoard[2][1]}} </div>
        <div class="box" @click="clickBoard(2,2)">{{this.tictactoeBoard[2][2]}} </div>
    <div>
      <div v-if="player1Win === true">
        PLAYER O WIN <br>
        <button @click="backtoListRooms">BACK</button>
      </div>
      <div v-else-if="player2Win === true">
        PLAYER X WIN <br>
        <button @click="backtoListRooms">BACK</button>
      </div>
      <div v-else-if="draw === true">
        DRAW <br>
        <button @click="backtoListRooms">BACK</button>
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
      player2Win: false,
      draw: false
    }
  },
  methods: {
    clickBoard (row, col) {
      if (!this.isWin && this.tictactoeBoard[row][col] === '') {
        this.$socket.emit('gameBoard', { row, col, room: this.room })
      }
    },
    backtoListRooms () {
      this.$socket.emit('leaveRoom', this.room)
      this.$router.push({ name: 'Rooms' })
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
      if (this.tictactoeBoard[0][2] === 'X' && this.tictactoeBoard[0][2] === this.tictactoeBoard[1][1] && this.tictactoeBoard[0][2] === this.tictactoeBoard[2][0]) {
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
      if (this.tictactoeBoard[0][2] === 'O' && this.tictactoeBoard[0][2] === this.tictactoeBoard[1][1] && this.tictactoeBoard[0][2] === this.tictactoeBoard[2][0]) {
        this.isWin = true
        this.player1Win = true
        console.log('O win')
      }

      if (this.tictactoeBoard[0][0] && this.tictactoeBoard[0][1] && this.tictactoeBoard[0][2]) {
        if (this.tictactoeBoard[1][0] && this.tictactoeBoard[1][1] && this.tictactoeBoard[1][2]) {
          if (this.tictactoeBoard[2][0] && this.tictactoeBoard[2][1] && this.tictactoeBoard[2][2]) {
            this.isWin = true
            this.draw = true
          }
        }
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
<style>
  .game{
  width: 300px;
  overflow: hidden;
  margin: 50px auto 0 auto;
}

.game span{
  width: 100%;
  display: block;
  text-align: center;
  font-family: sans-serif;
  color: #fff;
  font-size: 25px;
  background: #334d50;
}

.game .box{
  float: left;
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  transition: all .25s ease-in-out;
  font-family: sans-serif;
  font-size: 85px;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
}

.game .box:hover{
  background: rgba(10,10,10,0.5);
  color: #fff
}
button{
  background: #334d50;
  color: white;
}
</style>
