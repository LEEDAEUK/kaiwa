<template>
  <div>{{ res_data }}</div>
</template>

<script>
import mxCrud from "../mixins/crud.js";
export default {
  name: "Home_1",
  created() {
    this.getPage();
  },
  mixins: [mxCrud],
  props: ["props_keyword"],
  data() {
    return {
      res_data: null,
    };
  },

  methods: {
    getPage() {
      this.MxReadData(`home/home_2/${this.props_keyword}`);
      console.log(this.props_keyword);
    },
  },
  watch: {
    props_keyword: function (newVal, oldVal) {
      this.getPage();
    },
  },
};
</script>