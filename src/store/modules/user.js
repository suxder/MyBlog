import { getToken, setToken } from "../../utils/auth";
import { login } from "../../api/user";

const state = {
  token: getToken(),
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};
const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then((response) => {
          const { data } = response;
          // 若密码正确，则resolve
          if (data.status === "ok") {
            commit("SET_TOKEN", data.token);
            setToken(data.token);
            resolve();
          } else {
            // 密码错误
            reject(data.msg);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
