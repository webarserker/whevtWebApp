<template>
  <div class="homePageFooter">
    <div class="contentNavImg">
      <div class="contentNavImgs">
        <router-link href="javascript:;" to="/drivingBehavior">
          <img src="src/common/img/w.png" /><br />
          <span>远程控制</span>
        </router-link>
      </div>
    </div>
    <div class="contentNavImg">
      <div class="contentNavImgs">
        <router-link href="javascript:;" to="/VehicleSafety">
          <img src="src/common/img/e.png" /><br />
          <span>车辆安全</span>
        </router-link>
      </div>
    </div>
    <div class="contentNavImg">
      <div class="contentNavImgs">
        <router-link href="javascript:;" to="/SecurityWarning">
          <img src="src/common/img/r.png" /><br />
          <span>安防告警</span>
        </router-link>
      </div>
    </div>
    <div class="contentNavImg">
      <div class="contentNavImgs">
        <router-link href="javascript:;" to="/driverAssistance">
          <img src="src/common/img/t.png" /><br />
          <span>辅助驾驶</span>
        </router-link>
      </div>
    </div>
    <div class="contentNavImg">
      <div class="contentNavImgs">
        <router-link href="javascript:;" to="/vehicleSurveillance">
          <img src="src/common/img/p.png" /><br />
          <span>车辆监控</span>
        </router-link>
      </div>

    </div>
    <div class="contentNavImg">
      <div class="contentNavImgs">
        <router-link href="javascript:;" to="/infotainment">
          <img src="src/common/img/g.png" /><br />
          <span>信息娱乐</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FootPage"
    }
</script>

<style scoped>

</style>
