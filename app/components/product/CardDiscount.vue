<template>
  <div class="product-card-discount">
    <div>
      <p class="product-card-discount-title">
        Save Up to 50% <br> on Exclusive Furniture Pieces
      </p>
      <button class="btn btn-primary">
        Buy Now
      </button>
    </div>
    <div>
      <NuxtImg class="product-card-discount-img" src="/images/product/chair-3.svg" alt="FurniHub Chair Discount" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-card-discount {
  width: 100%;
  position: relative;
  border-radius: 18px;
  height: 250px;
  margin: 30px auto;
  background: linear-gradient(50deg, rgb(211, 228, 228) 0%, rgb(227, 247, 251) 51%, rgb(200, 231, 230) 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding: 20px 60px;
  box-sizing: border-box;

  .product-card-discount-title {
    font-size: 28px;
    font-weight: bold;
    margin: 20px 0px;
    line-height: 36px;
  }

  .product-card-discount-img {
    width: 12rem;
  }
}
@media (max-width: 768px) {
  .product-card-discount {
    padding: 10px 20px;
    height: 100%;
    .product-card-discount-title {
      font-size: 18px;
      font-weight: bold;
      margin: 20px 0px;
      line-height: 28px;
    }
  }
}
</style>
