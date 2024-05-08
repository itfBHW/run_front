<template>
    <div class="container">
      <div class="header">
        <h1>Coding Test</h1>
      </div>
  
      <div class="content">
        <div class="problem">
          <h2>문제</h2>
          <pre>{{ problem }}</pre>
        </div>
  
        <div class="editor">
          <h2>코드 에디터</h2>
          <textarea v-model="code" placeholder="여기에 코드를 입력하세요."></textarea>
          <button class="btn" @click="submitCode">제출</button>
        </div>
      </div>
    </div>
</template>
  
<script>
export default {
  data() {
    return {
      problem: `이곳에 생성된 문제가 표시될 예정입니다.`,
      code: ''
    };
  },
  methods: {
    submitCode() {
      // 코드 제출 기능 구현
      console.log('코드 제출:', this.code);
      // 여기에 코드를 제출하는 로직을 작성하세요.
    }
  }
};
</script>
  
<style scoped>
.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
}

.header {
  background-color: #003A9A; /* 머신러닝 파랑 */
  color: #FAF7FF; /* 진한 흰색 */
  padding: 20px;
  text-align: center;
}

.header h1 {
  margin: 0;
}

.content {
  display: flex;
  justify-content: space-between;
}

.problem {
  flex: 1;
  background-color: #FAF7FF; /* 진한 흰색 */
  border-radius: 4px;
  padding: 20px;
  margin-right: 10px;
}

.editor {
  flex: 1;
  background-color: #FAF7FF; /* 진한 흰색 */
  border-radius: 4px;
  padding: 20px;
}

.editor textarea {
  width: calc(100% - 20px);
  height: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f2f2f2; 
  color: #333; 
}

.btn {
  background-color: #004AAD; 
  color: #FAF7FF; 
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #003A9A; 
}
</style>