import Vue from 'vue'
import VueRouter from 'vue-router'
import FilmsList from '../views/FilmsList'
import PeopleList from '../views/PeopleList'
import PeopleDetail from '../views/PeopleDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Films',
    component: FilmsList
  },
  {
    path: '/people',
    name: 'People',
    component: PeopleList
  },
  {
    path: '/people/:id',
    name: 'People Detail',
    component: PeopleDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
