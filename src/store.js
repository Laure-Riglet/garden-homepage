import { reactive } from 'vue';
import data from './data.json';

export const store = reactive({

    currentMainContent: 0,
    previousMainContent: 0,
    displayWidth: window.innerWidth,
    navOpen: false,

    increment() {
        this.previousMainContent = this.currentMainContent;
        if (data.mainContent[store.currentMainContent + 1]) {
            this.currentMainContent++;
        } else {
            this.currentMainContent = 0;
        }
    },

    decrement() {
        this.previousMainContent = this.currentMainContent;
        if (data.mainContent[store.currentMainContent - 1]) {
            this.currentMainContent--;
        } else {
            this.currentMainContent = data.mainContent.length - 1;
        }
    },

    switchNav() {
        this.navOpen = !this.navOpen;
    }
});