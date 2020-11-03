/*
fetchTask
addTask
deleteTask
editTask
progressTask
*/

import TaskService from "@/services/task.service";
import JwtService from "@/common/jwt.service";

export default {
  namespaced: true,
  state: {
    tasks: []
  },
  getters: {
    tasks(state) {
      return state.tasks;
    }
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTasks(state, task) {
      state.tasks.push(task);
      // console.log("addtasks " + state.token);
    },
    deleteTask(state, id) {
      const index = state.tasks.findIndex(task => task._id === id._id);

      console.log(index);
      state.tasks.splice(index, 1);
    }
  },
  actions: {
    async fetchTasks(context) {
      try {
        // let res = await TaskService.fetchTasks();
        let res = await TaskService.fetchTasks(JwtService.getToken());
        // console.log(context.rootState.auth.user);
        context.commit("setTasks", res.data.tasks);
        console.log(res);
        // this.state.login = true;
      } catch (err) {
        console.error(err);
      }
    },
    async addTask(context, { taskAdded }) {
      await TaskService.addTask(JwtService.getToken(), taskAdded);
      context.commit("addTasks", {
        title: taskAdded
      });
    },

    async deleteTask(context, { id }) {
      await TaskService.deleteTask(JwtService.getToken(), id);
      context.commit("deleteTask", { _id: id });
    },
    async progressTask(context, { id, value }) {
      await TaskService.progressTask(JwtService.getToken(), id, value);
      //context.commit("progress", { _id: id, progress: value });
    }
  }
};
