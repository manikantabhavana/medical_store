function add(x){
    x="x-"+x
    return function addNum(y){
        y= "y-"+x
        return function addNum1(y){
            return "z-"+y
        }
    }
}
console.log(add("a")("b")("c"))



