class product{
    name = 'Aravind';
    protected price = 20;
    constructor(name: string, price: number){
        this.name=name;
        this.price=price;
    }
    display(): void{
        console.log(this.name);
        console.log(this.price);
    }
    
}
let product1=new product('lenova', 3880);
    product1.display();

class tax extends product{
tax = 9827398;
constructor(name: string, price: number, tax: number){
    super(name, price);
    this.tax=tax;
}
display(): void {
    super.display();
    console.log(this.tax);
}
totalPrice(): number{
   return (this.price*this.tax)/this.price;
}

}
let tax2=new tax('samsung', 3880,327398);
    tax2.display();
    console.log(tax2.totalPrice());

