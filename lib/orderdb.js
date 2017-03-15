class OrderDB {
  constructor(){
    this.orders = []
  }

  getOrders(username){
    return this.order.filter((item)=>{
      item.username === username
    })
  }

  addOrders(orders){
    this.order.push(...orders)
  }
}

var orderDB = new OrderDB();

export default orderDB;