import Vue from 'vue'
import Router from 'vue-router'
import ClientList from '@/components/ClientList'
import ShowClient from '@/components/ShowClient'
import CreateClient from '@/components/CreateClient'
import EditClient from '@/components/EditClient'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ClientList',
      component: ClientList
    },
    {
      path: '/show-client/:id',
      name: 'ShowClient',
      component: ShowClient
    },
    {
      path: '/add-client',
      name: 'CreateClient',
      component: CreateClient
    },
    {
      path: '/edit-client/:id',
      name: 'EditClient',
      component: EditClient
    }
  ]
})
