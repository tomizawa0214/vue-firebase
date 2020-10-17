new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue ninja',
    name: 'Ryu'
  },
  methods: {
    great(time) {
      return `Hello and good ${time} ${this.name},`
    }
  }
})