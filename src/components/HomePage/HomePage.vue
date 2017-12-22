<template>
  <div class="indexContent">
    <home-page-header></home-page-header>
    <div class="homePageContent">
      <div class="homePageContent-img">
        <router-link href="javascript:;" to="/condition">
          <img src="src/common/img/q.png" />
        </router-link>
      </div>
    </div>
    <foot-page></foot-page>
  </div>
</template>

<script type="text/ecmascript-6">
  import 'common/style/reset.css'
  import 'common/style/homePage.css'
  import HomePageHeader from 'components/HomePageHeader/HomePageHeader'
  import FootPage from 'components/FootPage/FootPage'

    export default {
        name: "home-page",
        components: {
          HomePageHeader,
          FootPage
        }
    }
</script>

<style scoped>

</style>
