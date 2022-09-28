import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/UserSettings",
      name: "userSettings",
      component: () => import("../views/UserMenuView/UserMenu.vue"),
      children: [
        {
          path: "Create",
          name: "createUser",
          component: () => import("../views/UserMenuView/CreateUser.vue"),
        },
        {
          path: "Update",
          name: "updateUser",
          component: () => import("../views/UserMenuView/UpdateUser.vue"),
        },
        {
          path: "Delete",
          name: "deleteUser",
          component: () => import("../views/UserMenuView/DeleteUser.vue"),
        },
      ],
    },
  ],
});

export default router;
