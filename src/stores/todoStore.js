import { defineStore } from "pinia";

export const useTodoList = defineStore('todo', {
    state:()=>({
        ListItems:[],
        status:0,
        id:1,
        date:0,
    }),

    persist: {
        paths: ['ListItems'],

    },

    getters: {


    },

    actions: {

        addItems(list) {
           const done= this.ListItems.push({ list, date:  new Date().toLocaleString(), status: this.status, id: this.id++})
            return done;
        },

        changeStatus(getId) {
            const findId=this.ListItems.find((obj) => obj.id === getId)
            if (getId){
                findId.status=1;
            }else {
                alert("Nothing match")
            }
        },

        changeStatusUnread(getId) {
            const findId=this.ListItems.find((obj) => obj.id === getId)
            if (findId){
                findId.status=0;
            }else {
                alert("Nothing match");
            }
        },

        deleteItem(getId) {
            const findId=this.ListItems.find((obj) => obj.id === getId);
            if (findId){
               const success= this.ListItems= this.ListItems.filter((object) => {
                    return object.id !== getId;
                });
                return success;
            }
            else {
                alert("something went wrong");
            }

        },
    }
})