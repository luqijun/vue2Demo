<template>
  <div class="chat-container">
    <div class="chat-messages">
      <div v-for="(message, index) in messages" :key="index" :class="['chat-message', message.sender === 'AI' ? 'ai-message' : 'user-message']">
        <div class="message-content">{{ message.content }}</div>
      </div>
    </div>
    <div class="chat-input">
      <input
        type="text"
        v-model="newMessage"
        @keyup.enter="sendMessage"
        placeholder="Type a message..."
      />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: '',
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        this.messages.push({ sender: 'User', content: this.newMessage });
        this.newMessage = '';
        // 模拟AI回复
        setTimeout(() => {
          this.messages.push({ sender: 'AI', content: 'This is an automated response.' });
        }, 500);
      }
    },
  },
};
</script>

<style scoped>
.chat-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.chat-messages {
  height: 400px;
  overflow-y: auto;
  margin-bottom: 10px;
}
.chat-message {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  max-width: 70%;
  word-wrap: break-word;
}
.user-message {
  background-color: #007BFF;
  color: white;
  margin-left: auto;
}
.ai-message {
  background-color: #F8F9FA;
  color: #212529;
  margin-right: auto;
}
.chat-input input {
  width: calc(100% - 60px);
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.chat-input button {
  padding: 10px;
  border: none;
  background-color: #007BFF;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
.chat-input button:hover {
  background-color: #0056b3;
}

/* 新增的样式 */
.message-content {
  max-width: 100%; /* 确保内容框不会超过其容器的宽度 */
  min-width: 0; /* 防止内容框收缩到0宽度 */
}
</style>
