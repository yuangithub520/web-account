//获取验证码
export let getVerifiCode = function(params){
    this.axios.post("http://192.168.1.102:8090/account/getcode", params).then((response) => {
        return response.data;
    });
}