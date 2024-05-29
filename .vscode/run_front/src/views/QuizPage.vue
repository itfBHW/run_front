<template>
  <div>
    <div class="header">
      <h1>Coding Test</h1>
    </div>

    <!-- 문제 생성 칸 -->
    <div class="create-problem">
      <h2>문제 생성</h2>
      <select v-model="selectedProblem" @change="loadSelectedProblem">
        <option value="">코딩 문제 선택</option>
        <option
          v-for="problem in category"
          :key="problem.id"
          :value="problem.id"
        >
          {{ problem.title }}
        </option>
      </select>

      <!-- 난이도 선택 -->
      <select v-model="selectedDifficulty">
        <option value="">난이도 선택</option>
        <option value="10">10</option>
        <!-- 난이도 10 어려움 -->
        <option value="9">9</option>
        <option value="8">8</option>
        <option value="7">7</option>
        <option value="6">6</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
        <!-- 난이도 1 쉬움 -->
      </select>

      <button
        class="btn"
        @click="createProblem"
        :disabled="!selectedProblem || !selectedDifficulty"
      >
        생성
      </button>
    </div>

    <div class="container">
      <div class="content">
        <div class="problem">
          <h2>문제</h2>
          <pre class="scrollabe">{{ problem }}</pre>
        </div>

        <div class="editor">
          <h2>코드 에디터</h2>
          <!-- 언어 선택 드롭다운 메뉴 -->
          <select v-model="selectedLanguage">
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="csharp">C#</option>
            <!-- 필요한 언어 추가 -->
          </select>
          <textarea
            v-model="code"
            class="scrollable"
            placeholder="여기에 코드를 입력하세요."
          ></textarea>
          <button class="btn" @click="submitCode">제출</button>
        </div>
      </div>

      <!-- 메시지가 표시 될 부분 -->
      <div v-if="message" class="message">{{ message }}</div>

      <!-- 결과가 표시 될 부분 -->
      <div v-if="result" class="result">
        <h2>결과</h2>
        <pre>{{ result }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      problem: `이곳에 생성된 문제가 표시될 예정입니다.`,
      code: "",
      selectedProblem: "", // 사용자가 선택한 코딩 문제의 ID
      selectedDifficulty: "10", // 사용자가 선택한 난이도, 나중에 유저 정보에서 가져오도록 수정 예정?
      selectedLanguage: "python", // 사용자가 선택한 언어
      category: [
        { id: "자료구조", title: "자료구조 문제" },
        { id: "알고리즘", title: "알고리즘 문제" },
        { id: "SQL", title: "SQL 문제" },
      ], // 코딩 문제 목록
    };
  },
  mounted() {
    // 코딩 문제 목록을 불러오는 로직
    axios
      .get(
        "https://asia-east1-projectrun-418503.cloudfunctions.net/gpt_code_generator"
      ) // 여기에 url
      .then((response) => {
        this.category = response.data;
      })
      .catch((error) => {
        console.error("코딩 문제 목록을 불러오는 중 에러 발생: ", error);
        this.showMessage("코딩 문제 목록을 불러오는 중 에러가 발생했습니다.");
      });
  },
  methods: {
    loadSelectedProblem() {
      // 선택한 코딩 문제의 ID를 기반으로 문제를 불러오는 로직
      if (this.selectedProblem) {
        axios
          .get(
            `https://asia-east1-projectrun-418503.cloudfunctions.net/gpt_code_generator`,
            {
              params: {
                category: this.selectedProblem,
                difficulty: this.selectedDifficulty,
              },
            }
          )
          .then((response) => {
            this.problem = response.data.problem;
          })
          .catch((error) => {
            console.error("문제를 불러오는 중 에러 발생: ", error);
            this.problem = "선택한 문제를 불러오는 중 에러가 발생했습니다.";
          });
      } else {
        this.problem = ""; // 선택한 문제가 없는 경우 문제를 초기화
      }
    },
    createProblem() {
      if (this.selectedProblem && this.selectedDifficulty) {
        // 선택한 코딩 문제의 ID를 이용해 서버로 요청을 보냄
        axios
          .post("/create-problem/", {
            category: this.selectedProblem,
            difficulty: this.selectedDifficulty,
          })
          .then((response) => {
            console.log("서버 응답:", response.data);
            // 서버 응답 처리 로직 추가
          })
          .catch((error) => {
            console.error("에러:", error);
            // 오류 처리 로직 추가
            this.showMessage(
              "문제 생성 중 오류가 발생했습니다. 다시 시도해주세요."
            );
          });
      } else {
        this.showMessage("카테고리와 난이도를 선택해주세요.");
      }
    },
    submitCode() {
      // 코드를 서버로 제출하는 HTTP POST 요청 보내기
      this.isLoading = true; // 로딩 상태 시작
      axios
        .post("/submit-code/", {
          code: this.code, // 코드를 요청 본문에 포함하여 보냄
          language: this.selectedLanguage, // 사용자가 선택한 언어도 함께 보냄
        })
        .then((response) => {
          console.log("서버 응답:", response.data);

          // 서버에서 실행한 결과를 받아와서 화면에 표시
          this.result = response.data.result; // 결과를 변수에 저장하여 화면에 표시

          // 성공 메시지 표시
          this.showMessage("성공적으로 코드가 제출되었습니다.");
        })
        .catch((error) => {
          console.error("에러:", error);
          // 오류 처리 로직 추가
          this.showMessage(
            "코드 제출 중 오류가 발생했습니다. 다시 시도해주세요."
          );
        })
        .finally(() => {
          this.isLoading = false; // 로딩 상태 종료
        });
    },
    showMessage(message) {
      // 사용자에게 메시지를 보여주는 함수
      alert(message);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
}

.header {
  background-color: #003a9a; /* 머신러닝 파랑 */
  color: #faf7ff; /* 진한 흰색 */
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
  background-color: #faf7ff; /* 진한 흰색 */
  border-radius: 4px;
  padding: 20px;
  margin-right: 10px;
}

.editor {
  flex: 1;
  background-color: #faf7ff; /* 진한 흰색 */
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
.create-problem {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.create-problem h2 {
  margin-right: 10px;
}
.create-problem select {
  margin-right: 10px;
}
.create-problem .btn {
  background-color: #004aad;
  color: #faf7ff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.create-problem .btn:hover {
  background-color: #003a9a;
}
.btn {
  background-color: #004aad;
  color: #faf7ff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #003a9a;
}
.scrollable {
  max-height: 400px; /* 최대 높이 설정 */
  overflow-y: auto; /* 세로 스크롤바 표시 */
}
</style>
