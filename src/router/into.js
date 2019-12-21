export default{
    name:"into",
    path:"/into",
    component:()=>import("../views/into/into"),
    children:[
        {path:":id",component:()=>import("../components/into/_id.vue"),name:"into"},      
    ]
}