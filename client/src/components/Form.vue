<template>
  <form @submit.prevent="addMessage">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" required v-model="message.username">
      </div>
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" class="form-control" id="subject" placeholder="Enter Subject" required v-model="message.subject">
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10" class="form-control" v-model="message.message"></textarea>
      </div>
       <div class="form-group">
        <label for="imageURL">Image URL</label>
        <input type="url" class="form-control" id="imageURL" placeholder="Enter imageURL" required v-model="message.imageURL">
      </div>
      <button type="submit" class="btn btn-primary">Add Message</button>
    </form>
</template>
<script>
const API_URL = 'http://localhost:3000/messages'; 
export default {
  data: () =>({
    message: {
      username:'Anonymus',
      subject : '',
      message : '',
      imageURL : ''
    }
  }),
  methods:{
    addMessage(){
      console.log(this.message);
      fetch(API_URL,{
        method : 'POST',
        body: JSON.stringify(this.message),
        headers : {
          'content-type' : 'application/json'
        }
      })
      .then(response => response.json())
      .then(result => {
       console.log(result);
      })
    }
  }
}
</script>
