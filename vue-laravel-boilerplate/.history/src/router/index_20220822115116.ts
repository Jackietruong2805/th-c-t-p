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


