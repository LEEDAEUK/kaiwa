<template>
  <div style="margin:15px 0 0 0;">
    <div v-if="res_data == null" class="flex_row_center_center" style="height:100px;">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div v-else-if="res_data.length == 0" class="flex_column_unset_center">
      <div>データなし</div>
    </div>
    <div v-else class="flex_column_unset_center">
      <v-btn
        style="width: 100%; margin: 0 0 15px 0; height:50px;"
        color="white"
        v-for="a in res_data"
        :key="a.situation_code"
        @click="kaiwaSwOn(a.place_name,a.situation_code, a.situation_name)"
      >
        {{ a.situation_name }}
      </v-btn>
    </div>
    <v-dialog v-model="kaiwa_sw" max-width="400" style="overflow: auto">
      <v-card class="popup">
        <div class="popup_top" v-if="res_seleted_data != null">
          <div style="display: flex; align-items: center">
            {{ kaiwa_title }} - {{ situation_name }}
          </div>
          <v-btn icon @click="kaiwa_sw = false">
            <v-icon>mdi-close-box-outline</v-icon>
          </v-btn>
        </div>
        <div class="popup_mid jp-weight-1" v-if="res_seleted_data != null">
          <div v-if="res_seleted_data.length != 0">
            <div v-for="(a,index) in res_seleted_data" :key="index" style="margin:0 0 15px 0">
              <div class="jp-weight-2">
                {{a[0]}}
              </div>
              <div>
                {{a[1]}}
              </div>
              <div>
                {{a[2]}}
              </div>
              
            </div>
          </div>
          <div v-else>データが存在していません。</div>
        </div>
        <div
          class="popup_mid jp-weight-1"
          style="display: flex; justify-content: center; margin: 30px 0 30px 0"
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
            color="white"
            >再生する</v-btn
          >
          <v-btn v-if="res_seleted_data.length != 0" style="width: 100%" color="white"
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
      kaiwa_title:null,
      situation_name: "",
      is_loaded: false,
      lang1: null,
      lang2: null,
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
    async kaiwaSwOn(place_name,situation_code, situation_name) {
      this.res_seleted_data = null;
      this.situation_name = situation_name;
      this.kaiwa_sw = true;
      await this.$ax
        .get(`/api/home/home_2/get_seleted_kaiwa/${situation_code}`)
        .then((response) => {
          if (response.data.message == "good") {
            console.log(response.data);
            this.kaiwa_title = place_name
            if (response.data.result.length == 2) {
              let lang1 = response.data.result[0].kaiwa.split(',');
              let lang2 = response.data.result[1].kaiwa.split(',');
              var kaiwa = []

              lang1.forEach((num1,index) => {
                console.log(index)
                let num2 = lang2[index];
                if(index%2 == 0){
                  kaiwa.push(["A",num1,num2])
                }else if(index%2 == 1){
                  kaiwa.push(["B",num1,num2])
                }
              })

              console.log(kaiwa)
              
              this.res_seleted_data = kaiwa;
            } else {
              this.res_seleted_data = [];
            }
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