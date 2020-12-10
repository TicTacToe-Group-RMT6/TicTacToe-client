<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{test}}</h1>
    <button @click="sendMessage2">Click Me</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    sendMessage2 () {
      console.log('send message')
      this.$socket.emit('sendMessage', 'test message dari client ke server lewat client')
    }
  },
  // sockets: {
  //   connect () {
  //     console.log('Client Connect')
  //   }
  // },
  computed: {
    test () {
      return this.$store.state.test
    }
  }
}
</script>
