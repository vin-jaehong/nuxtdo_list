<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
            <b-navbar-brand>Nuxtdo List</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="/" :active="currentUrlPath==='/'?true:false">Home</b-nav-item>
                    <b-nav-item href="/" :active="currentUrlPath==='/add'?true:false">Add</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script setup lang="ts">
    import { useRoute, ref } from '@nuxtjs/composition-api';
    const currentUrlPath = ref(useRoute().value.path);
</script>

<style>
    
</style>