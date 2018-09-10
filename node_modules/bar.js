function People(name,age,sex){
    this.name=name;
    this.age=age;
    this.sex=sex;
}
//原型和原型链的区别
//什么是原型
//prototype和_proto_的区别
People.prototype={
    sayHello:function(){
        console.log(this.name + "," + this.age + "," + this.sex);
    }
}
module.exports=People