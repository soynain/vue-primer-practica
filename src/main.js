import { createApp } from 'vue'
import App from './App.vue'
import NavBarParentComponentVue from './components/NavBarParentComponent.vue';


const navBody=createApp(NavBarParentComponentVue);
const appBody=createApp(App);
navBody.mount('.navbar');
appBody.mount('.spa-body');
//app2.provide('key','naco')
