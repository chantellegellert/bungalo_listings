<template>
  <div class="centered-container">
    <md-content class="md-elevation-3">
      <div class="logo_container">
        <img class="vue_logo center" src="../assets/logo.png" />
      </div>

      <form novalidate class="md-layout" @submit.prevent="validateUser">
        <md-card
          class="md-card-login md-layout-item md-size-100 md-small-size-100"
        >
          <md-card-header>
            <div class="md-title">Welcome!</div>
          </md-card-header>

          <md-card-content
            v-if="$store.state.userName && $store.state.userName !== ''"
          >
            You are logged in as {{ $store.state.userName }}
          </md-card-content>

          <md-card-content
            v-if="!$store.state.userName || $store.state.userName === ''"
          >
            <md-field :class="getValidationClass('userName')">
              <label for="user-name">Your name?</label>
              <md-input
                name="user-name"
                id="user-name"
                autocomplete="users-name"
                v-model="form.userName"
              />
              <span class="md-error" v-if="!$v.form.userName.minlength"
                >Name must be at least 3 characters long. Thank you</span
              >
            </md-field>
          </md-card-content>
          <div class="failedlogin" v-if="loginfail">
            You must provide a name or start searching anonymously. :)
          </div>
          <md-card-actions>
            <div
              class="md-layout md-gutter"
              v-if="!$store.state.userName || $store.state.userName === ''"
            >
              <div class="md-layout-item md-small-size-100">
                <md-button type="submit" class="md-primary"
                  >Enter name and click to start</md-button
                >
              </div>
              <div class="md-layout-item md-small-size-100">
                <md-button
                  @click="goToListings('Anonymous')"
                  class="md-primary"
                  >Or Search anonymously!</md-button
                >
              </div>
            </div>

            <div
              class="md-layout md-gutter"
              v-if="$store.state.userName && $store.state.userName !== ''"
            >
              <div class="md-layout-item md-small-size-100">
                <md-button
                  @click="logout()"
                  class="md-primary"
                  >Change Name</md-button
                >
              </div>
              <div class="md-layout-item md-small-size-100">
                <md-button
                  @click="nextPage()"
                  class="md-primary"
                  >Continue</md-button
                >
              </div>
            </div>
          </md-card-actions>
        </md-card>
      </form>
    </md-content>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

import store from "@/store";

export default {
  name: "FormValidation",
  mixins: [validationMixin],
  data: () => ({
    form: {
      userName: null
    },
    loginfail: false,
  }),
  validations: {
    form: {
      userName: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.userName = null;
    },
    checkLoginInfo() {
      this.loading = true;
      this.goToListings(this.form.userName);
    },
    goToListings(name) {
      this.$store.commit("adduserName", name);
      this.clearForm();
      this.$router.push("/listings");
    },
    logout() {
      this.$store.state.userName = "";
    },
    nextPage() {
      this.$router.push("/listings");
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.checkLoginInfo();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  background-color: rgba(29, 38, 117, 0.2);

  .failedlogin {
    color: red;
  }

  .vue_logo {
    height: 90px;
  }

  .logo_container {
    margin-top: -80px;
    z-index: 2;
    height: 90px;
  }

  .md-card-login {
    box-shadow: none !important;
  }

  .md-card .md-title {
    margin-top: 10px;
    text-align: center;
    color: #717173;
  }
  .md-content {
    z-index: 1;
    padding: 40px 40px 10px 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
    border-radius: 6px;
  }
}
</style>
