import { HOME_ROUTE } from '@/views/home/HomeView.route';
import { createRouter, createWebHistory } from 'vue-router';
import ChatBox from "../components/ChatBox.vue"


const routes = [
  { 
    path: "/",
    name: "member",
    component: ViewNotes,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //
    HOME_ROUTE,
  ],
});

export default router;

import ViewNotes from "@/views/ViewNotes.vue";
import ViewEditNote from "@/views/ViewEditNote.vue";
import ViewStats from "@/views/ViewStats.vue";
import ViewAuth from "@/views/ViewAuth.vue";

const routes = [
  {
    path: "/",
    name: "notes",
    component: ViewNotes,
  },
  {
    path: "/editNote/:id",
    name: "edit-note",
    component: ViewEditNote,
  },
  {
    path: "/stats",
    name: "stats",
    component: ViewStats,
  },
  {
    path: "/auth",
    name: "auth",
    component: ViewAuth,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});



export default router;
