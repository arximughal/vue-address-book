<template>
  <h1>Contact Form</h1>
  <router-link to="/">Back Home</router-link>
  <form @submit.prevent="saveContact">
    <div>
      <label>Name</label>
      <input type="text" name="name" placeholder="Full Name" required v-model="contact.name" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" name="email" placeholder="Email Address" required v-model="contact.email" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" name="phone" placeholder="Phone Number" required v-model="contact.phone" />
    </div>
    <div class="form-actions-container">
      <input type="submit" value="Save" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  props: ['initialContact', 'addContact'],
  data: function () {
    return {
      contact: typeof this.initialContact !== 'undefined' ? this.initialContact : {}
    }
  },
  methods: {
    saveContact() {
      const storage = window.localStorage;
      const contacts = JSON.parse(storage.getItem('contacts'));
      contacts.push(this.contact);
      storage.setItem('contacts', JSON.stringify(contacts));
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
  form {
   display: flex;
   margin: 0 auto;
   max-width: 450px;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
   text-align: left;
  }

  form div {
    display: block;
    width: 100%;
    text-align: left;
    margin-bottom: 5px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    padding: 5px;
  }

  input {
    display: block;
    width: 97%;
    height: 35px;
    padding: 5px;
    font-size: 14px;
    border: 2px solid #c9c9c9;
    border-radius: 4px;
  }

  input[type=submit] {
    background: #42b983;
    padding: 10px 25px;
    text-align: center;
    font-weight: bold;
    border: 1px transparent;
    border-radius: 4px;
    outline: none;
    color: white;
    text-decoration: none;
    font-size: 14px;
    width: auto;
    display: inline-flex;
  }

  .form-actions-container {
    text-align: right;
    align-items: flex-end;
    width: 100%;
    margin-top: 20px;
  }
</style>
