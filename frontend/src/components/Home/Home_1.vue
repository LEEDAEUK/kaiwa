<template>
  <div>
    <div style="display: 100%" class="flex_row_center_center">
      <v-carousel
        v-model="model"
        hide-delimiters
        style="height: 200px; max-width: 400px"
        cycle
        interval="4000"
      >
        <template v-slot:prev="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon> mdi-menu-left </v-icon>
          </v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon> mdi-menu-right </v-icon>
          </v-btn>
        </template>
        <v-carousel-item eager style="height: 200px">
          <v-img style="height: 200px" src="../../assets/parking1.jpeg" eager />
        </v-carousel-item>
        <v-carousel-item eager>
          <v-img style="height: 200px" src="../../assets/parking2.jpeg" eager />
        </v-carousel-item>
        <v-carousel-item eager>
          <v-img style="height: 200px" src="../../assets/parking3.jpeg" eager />
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home_1",
  created() {},
  data() {
    return {
      model: 0,
      image_list: [
        { src: "../../assets/parking1.jpeg" },
        { src: "../../assets/parking2.jpeg" },
      ],
    };
  },

  methods: {},
};
</script>
<style>
</style>