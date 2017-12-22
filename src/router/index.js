import Vue from 'vue'
import Router from 'vue-router'
import HomePage from 'components/HomePage/HomePage'
import driverAssistance from 'components/ListPage/driverAssistance'
import drivingBehavior from 'components/ListPage/drivingBehavior'
import infotainment from 'components/ListPage/infotainment'
import SecurityWarning from 'components/ListPage/SecurityWarning'
import VehicleSafety from 'components/ListPage/VehicleSafety'
import vehicleSurveillance from 'components/ListPage/vehicleSurveillance'
import condition from 'components/ListPage/condition'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/driverAssistance',
      component: driverAssistance
    },
    {
      path: '/infotainment',
      component: infotainment
    },
    {
      path: '/drivingBehavior',
      component: drivingBehavior
    },
    {
      path: '/SecurityWarning',
      component: SecurityWarning
    },
    {
      path: '/VehicleSafety',
      component: VehicleSafety
    },
    {
      path: '/vehicleSurveillance',
      component: vehicleSurveillance
    },
    {
      path: '/condition',
      component: condition
    }
  ]
})
