export default (context,inject)=>{
  //tiêm plugin vào context của nuxt nếu chạy SSR
  //tiêm plugin vào vue root instance nếu chạy SSR
  inject('alert',function (message){
    alert(message);
  })
}
