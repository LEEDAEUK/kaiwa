<template>
  <v-container>
    <!-- <div style="height:100px">
      <v-btn @click="sendRequest(1)">
        1
      </v-btn>
      <v-btn @click="sendRequest(2)">
        2
      </v-btn>
    </div> -->
    <!-- <div v-if="res_data != null" style="height:100px">
      <div>
        {{res_data.user_name}}
      </div>
      <div>
        {{res_data.user_age}}
      </div>
    </div> -->
    <div>
      <v-text-field
        class="child"
        style="margin: 0 0 10px 0"
        solo
        hide-details
        inner
        ref="search_bar"
        full-width
        label="シチュエーション [例：病院]"
        v-model="search_keyword"
        append-icon="mdi-magnify"
        @click:append="search()"
        @keydown.enter.native="enterKey()"
      ></v-text-field>
      <Home1 v-if="current_page == 1"></Home1>
      <Home2
        v-else-if="current_page == 2"
        :props_keyword="props_keyword"
      ></Home2>
    </div>
  </v-container>
</template>

<script>
import Home_1 from "../components/Home/Home_1.vue";
import Home_2 from "../components/Home/Home_2.vue";

export default {
  name: "Home",
  created() {
    this.getPage();
  },
  components: {
    Home1: Home_1,
    Home2: Home_2,
  },
  props: ["to_home1"],
  data: () => ({
    selected: null,
    res_data: null,
    search_keyword: null,
    props_keyword: null,
    current_page: 1,
  }),
  methods: {
    async getPage() {
      console.log("Home:getPage");
    },
    search() {
      console.log(this.keywordCheck(this.search_keyword));
      if (this.keywordCheck(this.search_keyword) == true) {
        this.current_page = 2;
        this.props_keyword = this.search_keyword;
        this.$emit("pageChange", 2);
      }
    },
    enterKey() {
      if (window.event.keyCode !== 13) return;
      this.search();
    },
    keywordCheck(str) {
      return str.match(/^[ぁ-んァ-ン一-龥]/) ? true : false;
    },
  },
  watch: {
    to_home1: function (newVal, oldVal) {
      console.log(newVal);
      if (newVal == true) {
        this.current_page = 1;
      }
    },
  },
};
</script>