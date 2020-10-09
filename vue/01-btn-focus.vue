<template>
  <div class="btn-groups">
    <div 
      v-for="(item, index) in btnGroups" 
      @click="btnClicked = index" :key="item.id"
      :class="['xbtn', btnClicked === index ? 'active' : '']">{{item.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'btnFocus',
  data() {
    return {
      btnClicked: 0,
      btnGroups: [
        {id: 0, name: 'A相'},
        {id: 1, name: 'B相'},
        {id: 2, name: 'C相'},
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
  .btn-groups {
    .xbtn {
      float: left;
      width: 90px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      margin: 30px 15px;
      cursor: pointer;
      background: url(../images/bg-btn.png);
      background-size: 100% 100%;
    }
    .xbtn.active {
      background: url(../images/bg-btn-active.png);
      background-size: 100% 100%;
    }
  }
</style>