<template>
  <div class="contact-container">
    <div class="contact-row">
      <div class="contact-column-value name">
        {{ contact.name }} <button @click="deleteContact(elementIndex)" class="">Delete</button>
      </div>
    </div>
    <div class="contact-row">
      <div class="contact-column-property">
        Email:
      </div>
      <div class="contact-column-value">
        someone@example.com
      </div>
    </div>
    <div class="contact-row">
      <div class="contact-column-property">
        Phone:
      </div>
      <div class="contact-column-value">
        +92-313-0000123
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    props: ['initialContact', 'deleteContact', 'elementIndex'],
    data() {
      return {
        contact: this.initialContact
      }
    }
  }
</script>

<style>
  .contact-container {
    display: flex;
    flex-direction: column;
    width: 31%;
    padding: 20px 10px;
    margin: 1px;
    border: 1px transparent;
    border-radius: 4px;
    cursor: default;
    transition: all 0.2s ease-in-out;
  }

  .contact-container:hover {
    background-color: #d7fbeb;
  }

  .contact-row {
    display: flex;
    flex-direction: row;
  }

  .contact-column-property {
    display: flex;
    width: 20%;
  }

  .contact-column-value {
    font-weight: bold;
  }

  .contact-column-value.name {
    font-size: 18px;
  }

  .contact-column-value.name button {
    display: none;
    transition: all 0.2s ease-in-out;
  }

  .contact-container:hover .contact-column-value.name button {
    display: inline-block;
  }
</style>
