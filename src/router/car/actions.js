export default{
    addGoodInCar(ctx,good){
        //添加商品到购物车
        setTimeout(() =>{
            //获取后端传递来的数据
            let cars = getCars()//[xxx,num:1]
            let isHas = cars.some(item=>{
                if(item.id === good.id){
                    item.num++
                    return true
                }
            })
            if(!isHas){//如果商品数组里面没有传入进来的商品
                good.num = 1
                cars.push(good)
            }

            //通知后台更改后台更改后台
            localStorage.cars = JSON.stringify(cars)
            //更改vuex里面的数据cars
            
        },1000)
    }



   
}
//通过localStorage模拟后端
function getCars(){
    return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}