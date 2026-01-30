function getChai(kind : string|number|boolean){
    if(typeof kind === "string") {
        console.log(`chai ordered of ${kind}`)
}
}
getChai("masala")
function printId(id: number | string) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

class kulhadChai {
    Serve(){
        return `Serving chai in kulhad`
    }
}
class glassChai{   
    serve(){
        return `Serving chai in glass`
    }
}
type ChaiOrder = {
    type : string,
    sugar : number
}
 function isChaiOrder(obj : any ) : obj is ChaiOrder{

    return (
        typeof obj === "object" &&
        "type" in obj &&
        typeof obj.type === "string" &&
        "sugar" in obj &&
        typeof obj.sugar === "number" 
    )

 }
 function processChaiOrder(order : ChaiOrder | kulhadChai | glassChai){
    if(isChaiOrder(order)){
        console.log(`Processing chai order: Type - ${order.type}, Sugar - ${order.sugar} tsp`);
    } else if(order instanceof kulhadChai){
        console.log(order.Serve());
    } else if(order instanceof glassChai){
        console.log(order.serve());
    } else {
        console.log("Unknown order type");
    }