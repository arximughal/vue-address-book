<template>
  <div class="home">
    <div class="contacts-list">
      <h1>
        Address Book
        <router-link to='/add-contact' class="add-contact-btn">+ Add New Contact</router-link>
      </h1>
      <div class="contacts-container">
        <Contact v-for="(contact, index) in contacts" :key="contact.email" :initialContact="contact" :delete-contact="deleteContact" :element-index="index" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Contact from '@/components/Contact.vue'
const storage = window.localStorage;
export default {
  name: 'Home',
  components: {
    Contact
  },
  data: function() {
    return {
      contacts: JSON.parse(storage.getItem('contacts'))
    }
  },
  methods: {
    deleteContact(index) {
      const contacts = JSON.parse(storage.getItem('contacts'));
      contacts.splice(index, 1);
      storage.setItem('contacts', JSON.stringify(contacts));
      this.contacts = contacts;
    },
  },
  mounted() {
    const existingContacts = storage.getItem('contacts');
    if (existingContacts === null) {
      storage.setItem('contacts', JSON.stringify([
        {
          name: 'Iron Man',
          email: 'iron.man@avengers.inc',
          phone: '+1-555-555-5555'
        },
        {
          name: 'Black Widow',
          email: 'black.widow@avengers.inc',
          phone: '+1-555-555-5555'
        },
        {
          name: 'Captain America',
          email: 'cap@avengers.inc',
          phone: '+1-555-555-5555'
        },
        {
          name: 'Spider Man',
          email: 'coming.home@avengers.inc',
          phone: '+1-555-555-5555'
        },
        {
          name: 'Winter Soldier',
          email: 'winter.soldier@avengers.inc',
          phone: '+1-555-555-5555'
        }
      ]))
    }
  }
}
</script>

<style scoped>
  .contacts-list {
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    height: auto;
    flex-direction: column;
  }

  .add-contact-btn {
    background: #42b983;
    padding: 10px 15px;
    text-align: center;
    font-weight: bold;
    border: 1px transparent;
    border-radius: 4px;
    outline: none;
    color: white;
    text-decoration: none;
    font-size: 14px;
  }

  .contacts-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-top: 50px;
    flex-wrap: wrap;
  }
</style>
