<template>
	<v-app>
		<v-app-bar
      app
      dark
      style="width:100%; height:56px; max-width:1000px; left:unset; right:unset"
    >
		</v-app-bar>
		<v-main
      style="width: 100%; height: 100%; padding:56px 0 56px 0; max-width:1000px;"
    >
      <router-view
        style="height: 100%; width: 100%; overflow: auto; padding:10px; max-width:unset;"
      ></router-view>
    </v-main>
		<v-footer
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
		</v-footer>
	</v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped>
>>> .v-application--wrap {
  /* 여기서 min-height를 해 줌으로써, vuetify v0application--wrap의 기본속성인 height 100vh를 없앨 수 있다. 이게 포인트 */
  min-height: auto;
  height: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
}
>>> .v-toolbar__content {
  padding: 0 10px;
  height: 100% !important;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>

<style>
  .child{
    width:100%;
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
.flex_wrap{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap:wrap;
}
.wrap_div {
  width: 100%;
  margin: 0 0 10px 0;
}
</style>