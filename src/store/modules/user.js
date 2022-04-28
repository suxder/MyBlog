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
      login({ email: username.trim(), pwd: password })
        .then((response) => {
          const { data } = response;
          const res = data.data;
          // 若密码正确，则resolve
          console.log(res)
          if (res.success === 1) {
            commit("SET_TOKEN", res.token);
            setToken(res.token);
            resolve();
          } else {
            // 密码错误
            reject(res.msg);
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
