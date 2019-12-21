export default {
    name:"info",
    path:"/info",
   component:()=>import("@/views/info"),
   children:[
    {path:":id",component:()=>import("../info"),name:"info"},      
    ]
}