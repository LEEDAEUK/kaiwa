<template>
  <v-app class="my-application">
    <v-app-bar
      app
      dark
      style="
        width: 100%;
        height: 56px;
        max-width: 1000px;
        left: unset;
        right: unset;
      "
    >
      <div class="jp-weight-3" style="color: white; font-size: 20px">KAIWA</div>
    </v-app-bar>
    <v-main
      style="width: 100%; height: 100%; padding: 56px 0 0 0; max-width: 1000px"
    >
      <router-view
        style="
          height: 100%;
          width: 100%;
          overflow: auto;
          padding: 10px;
          max-width: unset;
        "
        @pageChange="pageChange"
        :to_home1="to_home1"
      ></router-view>
    </v-main>
    <div style="position: absolute; bottom: 30px; left: 30px">
      <v-btn fab dark medium color="primary" @click="slider = true">
        <v-icon dark> mdi-menu </v-icon>
      </v-btn>
      <!-- <v-btn v-else-if="2" fab dark medium color="primary" @click="emitToHome">
        <v-icon dark> mdi-keyboard-backspace </v-icon>
      </v-btn> -->
    </div>
    <div v-if="back_on" style="position: absolute; bottom: 30px; right: 30px">
      <v-btn fab dark medium color="primary" @click="toHome1">
        <v-icon dark> mdi-arrow-left </v-icon>
      </v-btn>
    </div>
    <!-- <v-footer
      padless
      absolute
      style="
        height: 56px;
        background-color: #bababa;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        bottom: 0;
        max-width:1000px;
        left:unset; right:unset
      "
    >
    <div>
      footer
    </div>
		</v-footer> -->
    <v-navigation-drawer v-model="slider" absolute temporary>
      <v-list nav>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    slider: false,
    group: null,
    back_on: false,
    to_home1: false,
  }),
  methods: {
    pageChange(page) {
      console.log(page);
      this.to_home1 = false;
      this.back_on = true;
    },
    toHome1() {
      this.to_home1 = true;
      this.back_on = false;
    },
  },
};
</script>
<style scoped>
>>> .v-application--wrap {
  /* 여기서 min-height를 해 줌으로써, vuetify v0application--wrap의 기본속성인 height 100vh를 없앨 수 있다. 이게 포인트 */
  min-height: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
>>> .v-toolbar__content {
  padding: 0 10px;
  height: 100% !important;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
</style>

<style>
.child {
  width: 100%;
}

/* flex */
.flex_column_unset_center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flex_column_center_center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.flex_row_center_center {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.flex_row_center_unset {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.flex_row_unset_center {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: unset;
}
.flex_wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.wrap_div {
  width: 100%;
  margin: 0 0 10px 0;
}
</style>