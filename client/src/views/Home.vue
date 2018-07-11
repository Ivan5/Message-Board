<template>
  <div class="home">
    <button @click="showMessageForm = !showMessageForm" type="button" class="btn btn-info mt-2">Message Form</button>
    <Form v-if="showMessageForm" />
   <div class="list-unstyled mt-4" v-for="message in reversedMessages" :key="message._id">
     <li class="media">
       <img v-if="message.imageURL" :src="message.imageURL" :alt="message.subject" class="mr-3">
       <div class="media-body">
         <h4 class="mt-0 mb-1">{{message.username}}</h4>
         <h5 class="mt-0 mb-1">{{message.subject}}</h5>
        {{message.message}}<br>
        <small>{{message.created}}</small>
       </div>
     </li>
     <hr>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
const API_URL = 'http://localhost:3000/messages'; 
import Form from '@/components/Form.vue'
export default {
  name: 'home',
  components:{
    Form
  },
  data: () => ({
    messages : [],
    showMessageForm : false
    
  }),
  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
       this.messages = result
      })
  },
  computed : {
    reversedMessages(){
      return this.messages.slice().reverse();
    }
  }
  
};
</script>
<style scoped>
hr{
  border-top: 1px solid #000;
}
img{
  max-width: 300px;
  height: auto;
}
</style>
