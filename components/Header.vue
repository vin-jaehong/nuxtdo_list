<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
            <b-navbar-brand>Nuxtdo List</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="/" :active="currentUrlPath==='/'?true:false">Home</b-nav-item>
                    <b-nav-item href="/add" :active="currentUrlPath==='/add'?true:false">Add</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script setup lang="ts">
    //URL, store module import
    import { useRoute } from '@nuxtjs/composition-api';
    import { useDefaultStore } from '../store/store';
    import { storeToRefs } from 'pinia';
    //스토어 사용 준비
    const defaultStore = useDefaultStore();

    //스토어에서 상태, 메소드 가져오기
    const {currentUrlPath} = storeToRefs(defaultStore);
    const {changeCurrentUrlPath} = defaultStore;
    
    //현재 URL 상태 변경
    changeCurrentUrlPath(useRoute().value.path);
</script>

<style>
    
</style>