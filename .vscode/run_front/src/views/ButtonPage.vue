<template>
    <div>
      <button class="custom-button">일반 버튼</button>
      <button class="custom-button primary">Primary 버튼</button>
      <button class="custom-button secondary">Secondary 버튼</button>
      <button class="custom-button success">Success 버튼</button>
      <button class="custom-button danger">Danger 버튼</button>
    </div>
  </template>
  
  <style>
  .custom-button {
    background-color: #4CAF50; /* 초록색 */
    border: none;
    color: white;
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
  }
  
  .custom-button.primary {
    background-color: #007bff; /* 파란색 */
  }
  
  .custom-button.secondary {
    background-color: #6c757d; /* 회색 */
  }
  
  .custom-button.success {
    background-color: #28a745; /* 녹색 */
  }
  
  .custom-button.danger {
    background-color: #dc3545; /* 빨간색 */
  }
  </style>