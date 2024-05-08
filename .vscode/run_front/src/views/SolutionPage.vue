<template>
    <div>
      <h2>해답 페이지</h2>
      <div class="solution">
        <p>문제에 대한 해답:</p>
        <p>{{ solution }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        solution: '이 부분에 문제의 해답을 입력하세요.'
      };
    }
  };
  </script>
  
  <style scoped>
  .solution {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  