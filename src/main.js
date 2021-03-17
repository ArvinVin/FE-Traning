import Vue from 'vue'
const Blue = () => import(/* webpackChunkName: "lib-blue" */ '@blibli/dls')
const BlueCss = () => import(/* webpackChunkName: "lib-blue" */ '@blibli/dls/dist/blue.min.css')
const Init = () => import(/* webpackChunkName: "lib-blue" */ '@/init')

Promise.all([
  Blue(),
  BlueCss()
]).then(values => {
  Vue.use(values[0].default)
  Init()
})
