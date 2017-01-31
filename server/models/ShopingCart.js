/**
 * Created by sergiodiazpinilla on 30/01/17.
 */

// app/models/ShopingCart.js

//todo no se nesesita que persista en base de datos

class  ShopingCart {
    constructor(){
        this.objects = [];
        this.shopingDate = Date.now();
        this.total = 0;
    }
    buyArt(){
        let succesCode = true;
        //todo En sell system vender todo y hacer el pago - SellSystem.sell(this.objects) - make code sistem;
        if(succes){
            this.objects = [];
            this.shopingDate = Date.now();
            this.total = 0;
        }else{
            //todo mirar el mensaje de error en el sistema de ventas
            return SellSystem.error(succesCode).msg;
        }
    }
    addArt(artId , sellData){
        if(sellData.unique && sellData.sold == 0){
            this.objects.push(artId);
            this.total += sellData.price;
        }
    }
    emptyAll(){
        this.objects = [];
        this.total = 0;
    }

}