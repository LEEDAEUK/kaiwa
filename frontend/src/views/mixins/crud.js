
export default {
  data(){
    return{
    }
  },
  methods:{
    async MxReadData(par){
      await this.$ax
      .get(`/api/${par}`)
      .then((response) => {
        this.res_data = response.data.result
      });
    },
  },
  mounted(){

  }
}