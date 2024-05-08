<template>
    <div id="app">
      <h1>커뮤니티 게시판</h1>
      <div class="post-form">
        <input type="text" v-model="newPost" placeholder="새로운 게시글 작성">
        <button @click="addPost">작성</button>
      </div>
      <div class="posts">
        <div class="post" v-for="(post, index) in posts" :key="index">
          {{ post }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newPost: '',
        posts: []
      };
    },
    methods: {
      addPost() {
        if (this.newPost.trim() !== '') {
          this.posts.push(this.newPost);
          this.newPost = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  
  #app {
    max-width: 800px;
    margin: 20px auto;
    padding: 0 20px;
  }
  
  .post-form {
    margin-bottom: 20px;
  }
  
  .post-form input[type="text"] {
    width: calc(100% - 80px);
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .post-form button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .post-form button:hover {
    background-color: #0056b3;
  }
  
  .posts {
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .post {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  .post:last-child {
    border-bottom: none;
  }
  </style>
  