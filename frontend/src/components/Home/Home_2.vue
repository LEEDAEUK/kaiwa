<template>
  <div>
    <div v-if="res_data == null" class="flex_column_unset_center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div v-else-if="res_data.length == 0" class="flex_column_unset_center">
      <div>データなし</div>
    </div>
    <div v-else class="flex_column_unset_center">
      <v-btn
        style="width: 100%; margin: 0 0 10px 0"
        v-for="a in res_data"
        :key="a.situation_code"
      >
        {{ a.situation_name }}
      </v-btn>
    </div>
  </div>
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
      this.res_data = null;
      this.getPage();
    },
  },
};
</script>