import{J as r}from"./index-4dfcd51c.js";import{s as i}from"./utils-b2fc192b.js";var t=(a=>(a.Visa="visa",a.MasterCard="mastercard",a))(t||{});Object.values(t);const n=async()=>(await i(1e3),[{id:"1",name:"Main card",isPrimary:!0,paymentSystem:t.Visa,cardNumberMasked:"****1679",expirationDate:"0924"},{id:"2",name:"Online shopping",isPrimary:!1,paymentSystem:t.MasterCard,cardNumberMasked:"****8921",expirationDate:"1123"},{id:"3",name:"Backup Visa",isPrimary:!1,paymentSystem:t.MasterCard,cardNumberMasked:"****4523",expirationDate:"1222"}]),p=r({id:"paymentCards",state:()=>({paymentCards:[],loading:!1}),getters:{currentPaymentCard:a=>a.paymentCards.find(e=>e.isPrimary),allPaymentCards:a=>a.paymentCards},actions:{async load(){this.loading=!0,this.paymentCards=await n(),this.loading=!1},create(a){this.paymentCards.unshift(a)},update(a){const e=this.paymentCards.findIndex(s=>s.id===a.id);e!==-1&&this.paymentCards.splice(e,1,a)},remove(a){this.paymentCards=this.paymentCards.filter(e=>e.id!==a)}}});export{t as P,p as u};
//# sourceMappingURL=payment-cards-b59a08b6.js.map
