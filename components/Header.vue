<template>
    <div :style="{marginBottom: `${navBarHeight}px`}">
        <b-navbar toggleable="lg" type="dark" variant="info" class="__navBar" fixed="top">
            <b-navbar-brand>Nuxtdo List</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <nuxt-link to="/" class="navbar-item" :class="currentUrlPath==='/'?'navbar-item-active':''">Home</nuxt-link>
                    <nuxt-link to="/add" class="navbar-item" :class="currentUrlPath==='/add'?'navbar-item-active':''">Add</nuxt-link>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script setup lang="ts">
    //URL, store module import
    import { useRoute, onMounted, ref, watch } from '@nuxtjs/composition-api';
    import { useDefaultStore } from '../store/store';
    import { storeToRefs } from 'pinia';
    const route = useRoute();
    //스토어 사용 준비
    const defaultStore = useDefaultStore();

    //네비게이션 바 높이
    const navBarHeight = ref(0);

    //스토어에서 상태, 메소드 가져오기
    const { currentUrlPath } = storeToRefs(defaultStore);
    const { changeCurrentUrlPath } = defaultStore;

    //컴포넌트 마운트 완료 후
    onMounted(()=> {
        //네비게이션 바 DOM Element
        const navBar = document.getElementsByClassName('__navBar')[0] as HTMLElement;
        //네비게이션 바 높이
        navBarHeight.value = navBar.offsetHeight;
    });

    //페이지 이동 시
    watch(()=>route.value.path, (to, from)=> {
        //현재 URL 상태 변경
        changeCurrentUrlPath(to);
    });
</script>

<style lang="scss">
    .navbar-item {
        color: rgba(255,255,255,0.5);
        padding: 0 20px;
    }
    .navbar-item-active {
        color: rgba(255,255,255,1);
    }
</style>