<template>
	<v-container>
		<div style="height:100px">
      <v-btn @click="sendRequest(1)">
        1
      </v-btn>
      <v-btn @click="sendRequest(2)">
        2
      </v-btn>
    </div>
    <div v-if="res_data != null" style="height:100px">
      <div>
        {{res_data.user_name}}
      </div>
      <div>
        {{res_data.user_age}}
      </div>
    </div>
	</v-container>
</template>

<script>
  export default {
    name: 'Home',
    created(){
      this.getPage()
    },
    data: () => ({
      selected:null,
      res_data:null,
    }),
    methods:{
      async getPage(){
        console.log("Home:getPage")
      },
      async sendRequest(selected){
        console.log("Home:sendRequest")
        console.log(selected)
        await this.$ax
          .get(`/api/home/info/${selected}`)
          .then((response) => {
            console.log(response)
            this.res_data = response.data.result
          });
      }
    }
  }
</script>