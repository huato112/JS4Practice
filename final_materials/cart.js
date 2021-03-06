export let cart = {
    cartList: [],

    add(id, quantity){
        this.cartList.push({id: id, quantity: quantity, status : "pending"})
        this.save();
    },

    save() {
        localStorage.setItem('cartList', JSON.stringify(this.cartList));
      },
    
    load() {
        this.cartList = JSON.parse(localStorage.getItem('cartList'));
        if (this.cartList == undefined || this.cartList.length === 0) {
            return this.cartList = [];
        } else {
            return this.cartList;
        }
      },

    remove() {
        if (confirm('Empty cart ?')) {
            this.cartList = [];
            localStorage.removeItem('cartList');
        }
      },

    list(){
        this.load();
        let listItem = [];
        this.cartList.forEach((value) => {
            listItem.push(value);
        })
        return listItem;
    },

    status(id){
        if(this.cartList.some((value) => value.id == id)){
            this.cartList.find((index) => index.id == id).status = "done";
            this.save()
        }
    }

}