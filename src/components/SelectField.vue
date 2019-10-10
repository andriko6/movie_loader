<template>
    <v-combobox
      class="mx-6"
      @change="findId"
      v-model="selected"
      item-text="name"
      :items="genres"
      label="Genres"
    ></v-combobox>
</template>

<script>
  export default {
    data() {
      return {
        selected: {
            id: '',
            name: '',
        },
      }
    },
    props: {
      genres: {
        type: Array,
      },
    },
    methods: {
        findId() {
            this.$emit('add-id', this.selected);
        },
    },
}
</script>