<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Client
        <b-link href="#/">(Client List)</b-link>
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Client">
          <b-form-input id="name" :state="state" v-model.trim="client.name"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Address1">
          <b-form-input id="address1" :state="state" v-model.trim="client.address1"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Address2">
          <b-form-input id="address2" :state="state" v-model.trim="client.address2"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Address3">
          <b-form-input id="address3" :state="state" v-model.trim="client.address3"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Publisher Year">
          <b-form-input id="tva" :state="state" v-model.trim="client.tva"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Save</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'create-client',
  data () {
    return {
      client: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3033/client`, this.client)
        .then(response => {
          this.$router.push({
            name: 'ShowClient',
            params: { id: response.data._id }
          })
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style scoped>

</style>
