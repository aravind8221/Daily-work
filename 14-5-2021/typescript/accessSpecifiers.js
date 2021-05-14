var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var product = /** @class */ (function () {
    function product(name, price) {
        this.name = 'Aravind';
        this.price = 20;
        this.name = name;
        this.price = price;
    }
    product.prototype.display = function () {
        console.log(this.name);
        console.log(this.price);
    };
    return product;
}());
var product1 = new product('lenova', 3880);
product1.display();
var tax = /** @class */ (function (_super) {
    __extends(tax, _super);
    function tax(name, price, tax) {
        var _this = _super.call(this, name, price) || this;
        _this.tax = 9827398;
        _this.tax = tax;
        return _this;
    }
    tax.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(this.tax);
    };
    tax.prototype.totalPrice = function () {
        return (this.price * this.tax) / this.price;
    };
    return tax;
}(product));
var tax2 = new tax('samsung', 3880, 327398);
tax2.display();
console.log(tax2.totalPrice());
