<template>
  <div>
    <b-input-group prepend="Search" class="mb-5">
      <b-form-input></b-form-input>
      <b-input-group-append>
        <b-button variant="info">Submit</b-button>
      </b-input-group-append>
    </b-input-group>

    <TodoList></TodoList>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, useAsync } from '@nuxtjs/composition-api';
  import { useDefaultStore } from '~/store/store';
  const defaultStore = useDefaultStore();

  //store
  const { updateTodoList } = defaultStore;

  onMounted(()=> {
    updateTodoList();
  });
</script>




