<template>
  <div style="margin: 15px 0 0 0">
    <div class="flex_column_center_center">
      <v-carousel
        v-model="model"
        hide-delimiters
        style="height: 200px; max-width: 355px"
        cycle
        :show-arrows="false"
        interval="3000"
      >
        <!-- <template v-slot:prev="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon> mdi-menu-left </v-icon>
          </v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon> mdi-menu-right </v-icon>
          </v-btn>
        </template> -->
        <v-carousel-item eager>
          <v-img src="../../assets/main_icons/hospital_icon.jpg" eager aspect-ratio="1.7778" @click="toResult('病院')"/>
        </v-carousel-item>
        <v-carousel-item eager>
          <v-img src="../../assets/main_icons/post_icon.jpg" eager aspect-ratio="1.7778" @click="toResult('郵便局')"/>
        </v-carousel-item>
        <v-carousel-item eager>
          <v-img src="../../assets/main_icons/company_icon.jpg" eager aspect-ratio="1.7778" @click="toResult('会社')"/>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div style="margin: 15px 0 0 0">
      <v-slide-group center-active mandatory v-model="option">
        <v-slide-item v-slot="{ active, toggle }">
          <v-btn
            class="mx-2"
            :input-value="active"
            active-class="yellow white--text"
            depressed
            rounded
            @click="toggle"
          >
            本日の会話
          </v-btn>
        </v-slide-item>
        <v-slide-item v-slot="{ active, toggle }">
          <v-btn
            class="mx-2"
            :input-value="active"
            active-class="yellow white--text"
            depressed
            rounded
            @click="toggle"
          >
            昨日の人気会話
          </v-btn>
        </v-slide-item>
        <v-slide-item v-slot="{ active, toggle }">
          <v-btn
            class="mx-2"
            :input-value="active"
            active-class="yellow white--text"
            depressed
            rounded
            @click="toggle"
          >
            保存の会話
          </v-btn>
        </v-slide-item>
      </v-slide-group>
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
      option: 0,
    };
  },

  methods: {
    toResult(keyword){
      console.log(keyword)
      this.$emit("getKeyword", keyword);
    }
  },
};
</script>
<style>
</style>