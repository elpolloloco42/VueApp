<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Client
        <b-link href="#/">(Client List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{client.title}}
        </template>
        <template slot="lead">
          NAME: {{client.name}}<br>
          Address1: {{client.address1}}<br>
          Address2: {{client.address2}}<br>
          Address3 Year: {{client.address3}}<br>
          tva: {{client.tva}}<br>
        </template>
        <hr class="my-4">
        <b-btn variant="success" @click.stop="editclient(client._id)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deleteclient(client._id)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'show-client',
  data () {
    return {
      client: []
    }
  },
  created () {
    axios.get(`http://localhost:3033/client/` + this.$route.params.id)
      .then(response => {
        this.client = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    editclient (clientid) {
      this.$router.push({
        name: 'EditClient',
        params: { id: clientid
        }
      })
    },
    deleteclient (clientid) {
      axios.delete('http://localhost:3033/client/' + clientid)
        .then((result) => {
          this.$router.push({
            name: 'ClientList'
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
  .jumbotron {
    padding: 2rem;
  }
</style>
