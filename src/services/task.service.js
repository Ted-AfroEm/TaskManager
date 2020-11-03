//import axios from "./api.service";
import { BASEURL } from "../config/constants";

const axiosinit = require("axios");

const axios = axiosinit.create({
  baseURL: BASEURL
});

const TaskService = {
  async addTask(access_token, task) {
    try {
      let res = await axios.post(
        "/addtask",
        {
          task
        },
        {
          headers: {
            Authorization: access_token
          }
        }
      );
      console.log(res);
      return res;
    } catch (err) {
      console.error(err.response);
      return err.response;
    }
  },
  async fetchTasks(access_token) {
    try {
      let res = await axios.get("/tasks", {
        headers: {
          Authorization: access_token
        }
      });
      console.log(res);
      return res;
    } catch (err) {
      console.error(err.response);
      return err.response;
    }
  },
  async deleteTask(access_token, _id) {
    try {
      let res = await axios({
        url: "/deletetask",
        data: { _id },
        method: "delete",
        headers: {
          Authorization: access_token
        }
      });
      console.log(res);
      return res;
    } catch (err) {
      console.error(err.response);
      return err.response;
    }
  },
  async progressTask(access_token, _id, progress) {
    try {
      let res = await axios({
        url: "/progressupdate",
        data: { _id, progress },
        method: "patch",
        headers: {
          Authorization: access_token
        }
      });
      console.log(res);
      return res;
    } catch (err) {
      console.error(err.response);
      return err.response;
    }
  }
};

export default TaskService;
