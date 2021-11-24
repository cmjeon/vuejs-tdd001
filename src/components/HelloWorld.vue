<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>dddd</p>
    <button @click="myCount++">Add up</button>
    <p id="countMsg">Total clicks: {{ myCount }}</p>
    <p id="countMsg">{{ dataMsg }}</p>
    <button @click="add">Add up</button>
    <button @click="subtract">Subtract down</button>
    <p id="countMsg">{{ count }}</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      dataMsg: "HelloWorld",
      count: 0,
      myCount: 0,
    };
  },
  computed: {
    ...mapGetters({
      comCount: "getCount",
    }),
  },
  watch: {
    comCount() {
      this.count = this.comCount;
    },
  },
  methods: {
    ...mapMutations({
      commitCount: "SET_COUNT",
    }),
    add() {
      this.commitCount(this.count + 1);
    },
    subtract() {
      this.commitCount(this.count - 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
