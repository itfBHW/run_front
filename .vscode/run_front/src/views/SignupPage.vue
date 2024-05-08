<template>
    <div class="signup-form">
      <h1>회원가입</h1>
      <form @submit.prevent="signup">
        <div class="form-group">
          <label for="username">사용자 이름:</label>
          <input type="text" id="username" v-model="username" class="form-control">
        </div>
        <div class="form-group">
          <label for="email">이메일:</label>
          <input type="email" id="email" v-model="email" class="form-control">
        </div>
        <div class="form-group">
          <label for="password">비밀번호:</label>
          <input type="password" id="password" v-model="password" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">회원가입</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
    methods: {
      signup() {
        // 회원가입 로직을 구현합니다.
        console.log('Username:', this.username);
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        // 여기에 실제 회원가입 처리 로직을 작성하면 됩니다.
      }
    }
  };
  </script>
  
  <style scoped>
  .signup-form {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .btn {
    display: inline-block;
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>