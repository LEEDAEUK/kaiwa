
export default {
  data() {
    return {
    }
  },
  methods: {
    async MxReadData(par) {
      await this.$ax
        .get(`/api/${par}`)
        .then((response) => {
          if (response.data.message == "good") {
            this.res_data = response.data.result
            console.log(this.res_data)
          }

        });
    },
  },
  mounted() {

  }
}