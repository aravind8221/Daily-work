var global: number=10;
class scopes{
    static staticValue: number=20;
    instanceValue=30;

    display(): void{
        var localValue:number=40;
        console.log('local : '+localValue);
        console.log('instance : '+this.instanceValue);
        console.log('static : '+scopes.staticValue);

        

    }
}