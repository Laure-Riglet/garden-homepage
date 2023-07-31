import { reactive } from 'vue';
import data from './data.json';

export const store = reactive({

    currentMainContent: 0,

    increment() {
        if (data.mainContent[store.currentMainContent + 1]) {
            this.currentMainContent++;
        } else {
            this.currentMainContent = 0;
        }
    },

    decrement() {
        if (data.mainContent[store.currentMainContent - 1]) {
            this.currentMainContent--;
        } else {
            this.currentMainContent = data.mainContent.length - 1;
        }
    }
});