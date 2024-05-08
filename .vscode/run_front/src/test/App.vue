<template>
  <div id="app">
    <div class="navbar">
      <div class="title-group">
        <img src="./assets/TitleLogo.png" alt="TitleLogo" class="logo">
        <div class="button-group">
          <!-- 
            <router-link to="/">Main</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/signup">Signup</router-link> |
            <router-link to="/test">Test</router-link> |
          -->    
          <div class="svg-wrapper">
              <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                <rect id="shape" height="40" width="150" />
                <div id="text">
                  <a href="/"><span class="spot"></span>메인</a>
                </div>
              </svg>
          </div>
          <div class="svg-wrapper">
              <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                <rect id="shape" height="40" width="150" />
                <div id="text">
                  <a href="/test"><span class="spot"></span>문제</a>
                </div>
              </svg>
          </div>
          <div class="svg-wrapper">
              <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                <rect id="shape" height="40" width="150" />
                <div id="text">
                  <a href="/solution"><span class="spot"></span>해답</a>
                </div>
              </svg>
          </div>
          <div class="svg-wrapper">
              <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                <rect id="shape" height="40" width="150" />
                <div id="text">
                  <a href="/comu"><span class="spot"></span>커뮤니티</a>
                </div>
              </svg>
          </div>
        </div>
      </div>
      <div class="auth-buttons">
        <div class="svg-wrapper">
            <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
              <rect id="shape" height="40" width="150" />
              <div id="text">
                <a href="/login"><span class="spot"></span>로그인</a>
              </div>
            </svg>
        </div>
      </div>
      
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}

</script>

<style scoped>
#app {
  font-family: 'Nanum Gothic', 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body{
    margin: 0;
    padding: 0;
    background-color: #F2F2F2; /* 전체 배경색 */
}
.navbar{
    display:flex;
    justify-content: space-between;
    background-color: #F2F2F2; /* 네비게이션 바 배경색 */
    text-align: center;
    padding: 10px;
}
.title-group{
    display: flex;
    align-items: center;
}
.button-group{
    display: flex;
    gap: 5px;
}
.auth-buttons{
    display: flex;
    gap: 20px;
}
/* 새 버튼 */
.position {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 15%;
}

.spot {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.svg-wrapper {
  margin-top: 0;
  position: relative;
  width: 150px;
  height: 40px;
  display: inline-block;
  border-radius: 3px;
  margin-left: 5px;
  margin-right: 5px
}
#shape {
  stroke-width: 6px;
  fill: transparent;
  stroke: #009FFD;
  stroke-dasharray: 85 400;
  stroke-dashoffset: -220;
  transition: 1s all ease;
}
/* Text */
#text {
  margin-top: -35px;
  text-align: center;
}
#text a {
  color: #004AAD;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1em;
  font-family: 'Nanum Gothic', 'serif';
}
/* Hover state */
.svg-wrapper:hover #shape {
  stroke-dasharray: 50 0;
  stroke-width: 3px;
  stroke-dashoffset: 0;
  stroke: #06D6A0;
}
</style>

<!-- 
  색상 컨셉
  #003A9A
  #004AAD
  #393939
  #D9D9D9
  #F2F2F2
  #FAF7FF
 -->