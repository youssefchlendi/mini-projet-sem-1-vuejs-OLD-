<template>
<div>
            <div class="float-end mr-4 pr-4" style="margin-top:15px;margin-right:15px">
                <div href="" class="item">
                    <div class="group">
                        <button type="button" @click="showm" class="btn btn-primary" data-toggle="modal"
                            data-target="#exampleModalCenter">
                            <i class="material-icons">
                                shopping_cart
                            </i>
                        </button>
                        <div class="detail text-primary">
                            Cart({{cart}})
                            <div class="sub">Dt {{total}}</div>
                        </div>
                    </div>
                </div>
            </div>
   <productDisplay :reviews="reviews" @show-m="showm"  :varients="varients[0]" @add-cart="addToCart" @rem-cart="remFromCart" />
    <reviewForm @review-submited="addReview"/>
    <reviewList :reviews="reviews"/>

</div>
</template>

<script>

import productDisplay from '@/components/productDisplay.vue';
import reviewForm from '@/components/reviewForm.vue';
import reviewList from '@/components/reviewList.vue';

export default {
  name: 'App',
  components:{
      productDisplay,
      reviewForm,
      reviewList
  },
  data: function (){
        return{
            reviews :[],
            // cart : 0 
             varients:[[
                {id:2002,name:'Chausette Blue',color:"blue",quantity:1,image :"../assets/images/socks_blue.png",cart:0,price:12},
                {id:2001,name:'Chausette Green',color:"green",quantity:50,image :"../assets/images/socks_green.png",cart:0,price:10},
             ]
            ],
        }
    },
    methods : {
        test(val){
            console.log(val);
        },
        addToCart(tab){
            let add=tab[0];
            let id=tab[1];
            if (this.varients[0][id].quantity-add>=0){
            if (this.varients[0][id].quantity){
            this.varients[0][id].cart+=add;
            this.varients[0][id].quantity-=add;
            add=0;}}
        },
        updateVarient(arg){
            this.selectedVarient=arg;
            console.log(this.selectedVarient);
        },
        remFromCart(arg){
            if (this.varients[0][arg].cart!=0){
            this.varients[0][arg].cart--;
            this.varients[0][arg].quantity++;
        }
        },
        toAdd(){
            this.toAddv++;
        },
        remToAdd(){
            if (this.toAddv!=0)
                this.toAddv--;
        },
        addReview(review){
            this.reviews.push(review);
        },
        showm(){
            window.$('#exampleModalCenter').hasClass("show")?window.$('#exampleModalCenter').modal("hide"):window.$('#exampleModalCenter').modal("show");
        }
    },
    computed :{

        cart(){
            let count=0;
            for (let i = 0 ; i < this.varients[0].length ; i++) {
                count+=this.varients[0][i].cart;
            }
            // return this.varients[this.selectedVarient].cart;
            return count;
        },
        total(){
            return (this.varients[0][0].cart*this.varients[0][0].price+this.varients[0][1].cart*this.varients[0][1].price);
        },
    }
    
}

</script>

<style>
  @import '../assets/style.css';
  /* @import 'assets/bootstrap.min.css'; */
  @import 'https://fonts.googleapis.com/icon?family=Material+Icons';
</style>
