<template>
  <div class="login-control">
    <div class="container">
      <h1>Please Login</h1>
      <form>
        <div class="form-control">
          <input
            v-model="loginForm.username"
            type="text"
            required
          >
          <label>Email</label>
        </div>

        <div class="form-control">
          <input
            v-model="loginForm.password"
            type="password"
            required
            autocomplete="new-password"
          >
          <label>Password</label>
        </div>

        <button
          class="btn"
          @click="login"
        >
          Login
        </button>

        <p class="text">
          Don't have an account?
          <a href="#">Register</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      userToken: "",
    };
  },
  mounted() {
    this.jumpLabel();
  },
  methods: {
    login() {
      this.$store
        .dispatch("user/login", this.loginForm)
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch((err) => {
          alert("登陆失败：" + err);
        });
    },
    jumpLabel() {
      const labels = document.querySelectorAll(".form-control label");

      labels.forEach((label) => {
        label.innerHTML = label.innerText
          .split("")
          .map(
            (letter, idx) =>
              `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
          )
          .join("");
      });
    },
  },
};
</script>

<style>
.login-control {
  background-color: steelblue;
  color: #fff;
  font-family: "Muli", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.container {
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px 40px;
  border-radius: 5px;
}

.container h1 {
  text-align: center;
  margin-bottom: 30px;
}

.container a {
  text-decoration: none;
  color: lightblue;
}

.btn {
  cursor: pointer;
  display: inline-block;
  width: 100%;
  background: lightblue;
  padding: 15px;
  font-family: inherit;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
}

.btn:focus {
  outline: 0;
}

.btn:active {
  transform: scale(0.98);
}

.text {
  margin-top: 30px;
}

.form-control {
  position: relative;
  margin: 20px 0 40px;
  width: 300px;
}

.form-control input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px #fff solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: #fff;
}

.form-control input:focus,
.form-control input:valid {
  outline: 0;
  border-bottom-color: lightblue;
}

.form-control label {
  position: absolute;
  top: 15px;
  left: 0;
  pointer-events: none;
}

.form-control label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus + label span,
.form-control input:valid + label span {
  color: lightblue;
  transform: translateY(-30px);
}
</style>
