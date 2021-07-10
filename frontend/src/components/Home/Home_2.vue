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
  data() {
    return {
      res_data: null,
    };
  },

  methods: {
    getPage() {
      this.MxReadData(`home/home_2`);
    },
  },
};
</script>