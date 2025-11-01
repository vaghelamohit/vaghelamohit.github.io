import { createRouter as _createRouter, createWebHashHistory } from 'vue-router'

// route-level code splitting
const AboutView = () => import('../views/About.vue');
const ResumeView = () => import('../views/Resume.vue')
const GameView = () => import('../views/GameProjects.vue')
const OtherView = () => import('../views/OtherProjects.vue')
const ContactView = () => import('../views/Contact.vue')
const E404View = () => import('../views/404.vue')

export function createRouter(){
  return _createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'Root',
        component: AboutView
      },
      {
        path: '/resume',
        name: 'Resume',
        component: ResumeView
      },
      {
        path: '/game-projects',
        name: 'Game Projects',
        component: GameView
      },
      {
        path: '/game-projects/:projectId',
        name: 'Game Project Detail',
        component: GameView
      },
      {
        path: '/other-projects',
        name: 'Other Projects',
        component: OtherView
      },
      {
        path: '/other-projects/:projectId',
        name: 'Other Project Detail',
        component: OtherView
      },
      {
        path: '/contact',
        name: 'Contact',
        component: ContactView
      },
      {
        path: '/:projectId',
        name: 'Game Project Detail (Root)',
        component: GameView
      },
      {
        path: '/:pathMatch(.*)',
        name: 'NotFound',
        component: E404View
      }
    ]
  })
}
