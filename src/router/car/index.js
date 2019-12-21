export default {
    name:"car",
    path:"/car",
   component:()=>import("@/views/car"),
   children:[
    {path:":id",component:()=>import("../car"),name:"ca"},      
    ]
}