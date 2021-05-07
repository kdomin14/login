<template>
  <header>
    <div class="w-full bg-cover bg-center" style="height:32rem; background-image: url(https://cdn-prodcms.jostens.com/contentAsset/image/d46f4feb-ca7b-4bdc-9493-26ccb150aa9a/fileAsset/filter/Scale,Jpeg/scale_w/1920/jpeg_q/85/jpeg_p/1/d46f4feb-ca7b-4bdc-9493-26ccb150aa9a.jpg);">
        <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div class="text-center">
                <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">NBA</h1>
            </div>
        </div>
    </div>
  </header>
    <div class="container my-12 mx-auto px-4 md:px-12"> 
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" :key="product.id" v-for="product in products">
              <div class="banner-section" id="img-container">
              </div>
            <product
              :isInCart="isInCart(product)"
              v-on:add-to-cart="addToCart(product)"
              :product="product"
            ></product>
          </div>
        </div>
      </div>
      <div class="col-md-5 my-5">
        <cart v-on:pay="pay()" v-on:remove-from-cart="removeFromCart($event)" :items="cart"></cart>
      </div>
</template>

<script>
import products from "C:\\Windows\\System32\\projects\\login\\products.json";
import Product from "../components/Product.vue";
import Cart from "../components/Cart.vue";
export default {
  name: "app",
  components: {
    Product,
    Cart
  },
  data() {
    return {
      products,
      cart: []
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
    isInCart(product) {
      const item = this.cart.find(item => item.id === product.id);
      if (item) {
        return true;
      }
      return false;
    },
    removeFromCart(product) {
      this.cart = this.cart.filter(item => item.id !== product.id);
    },
    pay() {
      this.cart = [];
      alert("Thanks! Shopping successfully completed. ");
    }
  }
};
</script>

<style>
body {
  background-color: #dcdcdc;
}
</style>