export default {
    name:"list",
    path:"/list",
    component:()=>import("../../views/list"),
    children:[
        {path:"music",component:()=>import("@/components/banner/music"),name:"music"},
        {path:"all",component:()=>import("@/components/banner/all"),name:"all"},
        {path:"concert",component:()=>import("@/components/banner/concert"),name:"concert"},
        {path:"opera",component:()=>import("@/components/banner/opera"),name:"opera"},
        {path:"quYuan",component:()=>import("@/components/banner/quYuan"),name:"quYuan"},
        {path:"dance",component:()=>import("@/components/banner/dance"),name:"dance"},
        {path:"sports",component:()=>import("@/components/banner/sports"),name:"sports"},
        {path:"child",component:()=>import("@/components/banner/child"),name:"child"},
        {path:"relaxation",component:()=>import("@/components/banner/relaxation"),name:"relaxation"},
        {path:"cospa",component:()=>import("@/components/banner/cospa"),name:"cospa"},
        {path:"travel",component:()=>import("@/components/banner/travel"),name:"travel"},

        {path:"",redirect: "all"}
       
    ]
}
