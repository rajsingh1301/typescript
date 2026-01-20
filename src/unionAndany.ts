let subs : number | string = "1M"
subs = 1000000
// subs may be string or number
let apiRequest : "pending" | "success" | "error" = "pending"
apiRequest = "success"
// apiRequest = "failed" // error
// we try to avoid any type because it removes all the benefits of typescript