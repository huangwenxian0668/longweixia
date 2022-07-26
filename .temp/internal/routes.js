/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\blog\\1\\longweixia\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-51f769fa",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-51f769fa").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-1e2fec45",
    path: "/config/base/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1e2fec45").then(next)
    },
  },
  {
    path: "/config/base/index.html",
    redirect: "/config/base/"
  },
  {
    name: "v-2538a406",
    path: "/en/config/base/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2538a406").then(next)
    },
  },
  {
    path: "/en/config/base/index.html",
    redirect: "/en/config/base/"
  },
  {
    name: "v-46f9fda3",
    path: "/config/high/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-46f9fda3").then(next)
    },
  },
  {
    path: "/config/high/index.html",
    redirect: "/config/high/"
  },
  {
    name: "v-537aaa34",
    path: "/en/config/high/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-537aaa34").then(next)
    },
  },
  {
    path: "/en/config/high/index.html",
    redirect: "/en/config/high/"
  },
  {
    name: "v-281b754e",
    path: "/en/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-281b754e").then(next)
    },
  },
  {
    path: "/en/guide/index.html",
    redirect: "/en/guide/"
  },
  {
    name: "v-70a86006",
    path: "/en/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-70a86006").then(next)
    },
  },
  {
    path: "/en/index.html",
    redirect: "/en/"
  },
  {
    name: "v-6f50b216",
    path: "/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6f50b216").then(next)
    },
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]