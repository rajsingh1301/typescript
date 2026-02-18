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
    }}
    function assertIsChaiOrder(obj: any): asserts obj is ChaiOrder {
        if (
            typeof obj !== "object" ||
            obj === null ||
            !("type" in obj) ||
            typeof obj.type !== "string" ||
            !("sugar" in obj) ||
            typeof obj.sugar !== "number"
        ) {
            throw new Error("Object is not a valid ChaiOrder");
        }
    }
    function handleChaiOrder(order: any) {
        assertIsChaiOrder(order);
        console.log(`Handling chai order: Type - ${order.type}, Sugar - ${order.sugar} tsp`);
    }

// Example usages
processChaiOrder({ type: "Masala", sugar: 2 });
processChaiOrder(new kulhadChai());
processChaiOrder(new glassChai());

handleChaiOrder({ type: "Ginger", sugar: 1 });
function order(chai ) {
    if(chai instanceof kulhadChai){
        console.log(chai.Serve());
    } else if(chai instanceof glassChai){
        console.log(chai.serve());
    } else {
        console.log("Unknown chai type");
    }
}
function orderChai(chai : kulhadChai | glassChai){
    if(chai instanceof kulhadChai){
        console.log(chai.Serve());
    } else if(chai instanceof glassChai){
        console.log(chai.serve());
    } else {
        console.log("Unknown chai type");
    }
}
function orderChaiWithTypeGuard(chai : kulhadChai | glassChai){
    if(chai instanceof kulhadChai){
        console.log(chai.Serve());
    } else if(chai instanceof glassChai){
        console.log(chai.serve());
    } else {
        console.log("Unknown chai type");
    }
    function orderChaiWithTypeGuard(chai : kulhadChai | glassChai){
        if(chai instanceof kulhadChai){
            console.log(chai.Serve());
        } else if(chai instanceof glassChai){
            console.log(chai.serve());
        } else {
            console.log("Unknown chai type");
        }
    }