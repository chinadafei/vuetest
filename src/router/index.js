import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import BookMange from "../views/BookMange"
import AddBook from "../views/AddBook";
import BookUpdate from "../views/BookUpdate";
import PageThree from "../views/PageThree";
import index from "../views/index"
Vue.use(VueRouter)

  const routes = [
    {
      path:"/",
      name:"图书管理",
      component:index,
      redirect:"/BookMange",
      children:[
        {
          path: "/BookMange",
          name: '查询图书',
          component:BookMange
        },
        {
          path: "/AddBook",
          name: "添加图书",
          component:AddBook
        },
      ]
    },
    {
        path: "/update",
      component:BookUpdate
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
