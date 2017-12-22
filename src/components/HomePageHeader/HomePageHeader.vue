<template>
    <div class="homePageHeader">
      <div class="homePageHeader-one">
        <span></span>
      </div>
      <div class="homePageHeader-two">
        <div>
          <img src="src/common/img/1.png" />
          <span class="homePageHeader-twoNav">里程</span><br />
          <span class="homePageHeader-OneSpan"></span>
        </div>
        <div>
          <img src="src/common/img/2.png" />
          <span class="homePageHeader-twoNav">电池</span><br />
          <span class="homePageHeader-TwoSpan"></span>
        </div>
        <div>
          <a href="#!driver-assistance">
            <img src="src/common/img/4.png" />
            <span class="homePageHeader-twoNav">寻车</span><br />
          </a>

        </div>
        <div>
          <a href="#!news" class="newsHref">
            <img src="src/common/img/5.png" />
            <span class="homePageHeader-twoNav">消息</span><br />
          </a>
          <img src="src/common/img/67.png" class="newsImg"/>
        </div>
      </div>
    </div>
</template>
<script>

    export default {
        name: "home-page-header"
    }
</script>

<style scoped>

</style>
