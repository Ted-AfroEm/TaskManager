import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faLock,
  faCheckCircle,
  faPlusCircle,
  faPen,
  faTrashAlt,
  faTasks,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faEdit,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
library.add(
  faUser,
  faLock,
  faCheckCircle,
  faCircle,
  faPlusCircle,
  faPen,
  faTrashAlt,
  faTasks,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faEdit,
  faSpinner,
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
