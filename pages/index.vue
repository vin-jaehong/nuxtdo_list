<template>
  <div>
    <b-input-group prepend="Search" class="mb-5">
      <b-form-input v-model="todoListSearchString" @keypress.enter="submitBtnClickHandler"></b-form-input>
      <b-input-group-append>
        <b-button variant="info" @click="submitBtnClickHandler">Submit</b-button>
      </b-input-group-append>
    </b-input-group>

    <TodoList></TodoList>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from '@nuxtjs/composition-api';
  import { useDefaultStore } from '~/store/store';
  const defaultStore = useDefaultStore();

  //store
  const { updateTodoList, updateTodoListSearchString } = defaultStore;

  //state
  const todoListSearchString = ref('');

  //method
  const submitBtnClickHandler = ()=> {
    updateTodoListSearchString(todoListSearchString.value);
  };

  //life cycle method
  onMounted(()=> {
    updateTodoList();
  });
</script>




