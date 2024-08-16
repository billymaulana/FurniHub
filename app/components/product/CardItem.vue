<template>
  <div class="card-product">
    <div class="product-bg">
      <NuxtImg class="product-bg-img" src="/product/chair-1.svg" alt="furnihub product" />
      <button class="btn-add-wishlist">
        <NuxtIcon name="mynaui:heart" size="1.5em" class="icon-wishlist" />
      </button>
    </div>
    <div class="product-content">
      <div>
        <p class="product-content-title">
          Modern Chair
        </p>
        <p class="product-content-category">
          Chairs
        </p>
      </div>
      <div class="product-content-footer">
        <p class="product-content-price">
          $185
        </p>
        <button class="btn-add-cart">
          <NuxtIcon name="mynaui:plus" size="1.75em" class="icon-cart" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-product {
  position: relative;
  max-width: 280px;
  width: 100%;
  border-radius: 18px;
  background: $white;
  border: 1px solid $grey;
  padding: 10px 10px;
  overflow: hidden;
  box-sizing: border-box;
  font-size: 18px;
  display: flex;
  flex-flow: column;
  align-items: stretch;
  margin: 0 auto 30px auto;
  .product-bg {
    position: relative;
    width: 100%;
    height: 260px;
    border-radius: 18px;
    background-color: $grey;
    z-index: 1;
    overflow: hidden;
    padding: 10px;

    .product-bg-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 18px;
    }
    .btn-add-wishlist {
      position: absolute;
      right: 7px;
      top: 7px;
      width: 30px;
      height: 30px;
      background: $white;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      vertical-align: middle;
      overflow: hidden;
      border-radius: 50%;
      padding: 5px;
      margin: 0 auto;
      &:hover {
        cursor: pointer;
        transition: all 0.5s ease-in;
        background-color: darken($white, 10%);
      }
    }
  }

  .product-content {
    padding: 10px;
    border-radius: 18px;
    overflow: hidden;
    height: 100%;
    max-height: 150px;

    .product-content-title {
      font-size: 18px;
      line-height: 22px;
      font-weight: 600;
      color: $grey-space;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .product-content-category {
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
      color: $grey-cool;
    }

    .product-content-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 5px;
    }

    .product-content-price {
      font-size: 18px;
      line-height: 22px;
      font-weight: 600;
      color: $green-verdigris;
    }

    .btn-add-cart {
      background: $green-verdigris;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;

      .icon-cart {
        color: $white;
      }

      &:hover,
      &:focus {
        cursor: pointer;
        transition: all 0.5s ease-in;
        background-color: darken($green-verdigris, 10%);
      }
    }
  }
}
</style>
