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
        @click="kaiwaSwOn(a.situation_code, a.situation_name)"
      >
        {{ a.situation_name }}
      </v-btn>
    </div>
    <v-dialog v-model="kaiwa_sw" max-width="290" style="overflow: auto">
      <v-card class="popup">
        <div class="popup_top">
          <div style="display: flex; align-items: center">
            {{ situation_name }}
          </div>
          <v-btn icon @click="kaiwa_sw = false">
            <v-icon>mdi-close-box-outline</v-icon>
          </v-btn>
        </div>
        <div class="popup_mid jp-weight-1" v-if="res_seleted_data != null">
          <div v-if="res_seleted_data.length != 0">{{ res_seleted_data }}</div>
          <div v-else>データが存在していません。</div>
        </div>
        <div
          class="popup_mid jp-weight-1"
          style="display: flex; justify-content: center; margin: 0 0 30px 0"
          v-else
        >
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </div>
        <div class="popup_bottom" v-if="res_seleted_data != null">
          <v-btn
            v-if="res_seleted_data.length != 0"
            style="width: 100%; margin: 0 0 10px 0"
            >再生する</v-btn
          >
          <v-btn v-if="res_seleted_data.length != 0" style="width: 100%"
            >保存する</v-btn
          >
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Home_1",
  created() {
    this.getPage();
  },
  props: ["props_keyword"],
  data() {
    return {
      res_data: null,
      res_seleted_data: null,
      kaiwa_sw: false,
      situation_name: "",
      is_loaded: false,
    };
  },

  methods: {
    async getPage() {
      await this.$ax
        .get(`/api/home/home_2/get_list/${this.props_keyword}`)
        .then((response) => {
          if (response.data.message == "good") {
            this.res_data = response.data.result;
            console.log(this.res_data);
          }
        });
    },
    async kaiwaSwOn(situation_code, situation_name) {
      this.res_seleted_data = null;
      this.situation_name = situation_name;
      this.kaiwa_sw = true;
      await this.$ax
        .get(`/api/home/home_2/get_seleted_kaiwa/${situation_code}`)
        .then((response) => {
          if (response.data.message == "good") {
            this.res_seleted_data = response.data.result;
            console.log(this.res_seleted_data);
          }
        });
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