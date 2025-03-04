import { Field, SmartContract, state, State } from "o1js";

//field: minada sayisal degerleri temsil eden veri tipi.
//smart contract: zkapp in temel sinifi. tum akilli sozlesmeleri bu siniftan turetiriz.
//state: durum degiskenlerini tanimlayan dekoratör.
//State: durum degiskeninin tipi.
//method: zkapp icinde cagirilabilir metodlari tanimalamak icin kullanilan dekoratör.


//zkapp sinifi olusturalim:
class VeilForgeStatus extends SmartContract {

    //kullanicilarin durum mesajini saklamak icin durum degiskeni ekleyelim:
    @state(Field) status = State<Field>();  

    //init ile fonksiyon durumu baslangicta bir degerle baslatacak
    init() {
        super.init();
        this.status.set(Field(0));
      }
}