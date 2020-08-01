<template>
  <div id='promoney'>
      <div class="promoney-item">
          <p>
              0.00
              <span>元</span>
          </p>
          <p>我的余额</p>
      </div>
      <div class="promoney-item">
          <p>
              0
              <span>个</span>
          </p>
          <p>我的优惠</p>
      </div>
      <div class="promoney-item">
          <p>
              0
              <span>分</span>
          </p>
          <p>我的积分</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Promoney',
  data() {
    return {

    }
  }
}
</script>

<style scoped>
#promoney{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    text-align: center;
    
}
#promoney .promoney-item{
    flex: 1;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#promoney .promoney-item:nth-of-type(1),
#promoney .promoney-item:nth-of-type(2){
    border-right: 1px solid #eeeeee;
}

#promoney .promoney-item p:first-child{
    font-size: 24px;
    color: var(--color-high-text);
    font-weight: 700;
    margin-bottom: 3px;
}

#promoney .promoney-item p:first-child span{
    font-size: 14px;
    color: #666666;
    font-weight: normal;
    margin-left: 3px;
}

#promoney .promoney-item p:last-child{
    font-size: 14px;
    color: #666666;
}

.line{

}
</style>
