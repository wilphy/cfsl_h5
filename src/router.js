import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./pages/home";
import Classic from "./pages/classic";
import Book from "./pages/book";
import BookDetail from "./pages/book-detail";
import My from "./pages/my";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "/classic",
      children: [
        {
          path: "/classic",
          name: "classic",
          component: Classic,
        },
        {
          path: "/book",
          name: "book",
          component: Book,
        },
        {
          path: "/book-detail/:id",
          name: "book-detail",
          component: BookDetail,
        },
        {
          path: "/my",
          name: "my",
          component: My,
        },
      ],
    },
  ],
});
