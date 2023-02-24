<template>
    <div>
        <!-- leave 애니메이션은 작동되는데, enter 애니메이션이 안먹음. 확인 필요 -->
        <Transition name="fade">
            <div class="modal-layout" v-if="isShow">
                <div class="modal-body-layout">
                    <slot></slot>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
    import { defineProps } from 'vue';
    
    //props
    interface Props {
        isShow: boolean,
    }
    const props = defineProps<Props>();
</script>

<style lang="scss">
    .modal-layout {
        z-index: 10000;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #00000064;
        .modal-body-layout {
            position: relative;
            width: 40%;
            height: 60%;
            margin: 0 auto;
            top: 50%;
            transform: translateY(-50%);
            background-color: #ffffff;
        }
    }

    .fade-enter-from {
        opacity: 0;
    }
    .fade-enter-active {
        transition: all 0.5s;
    }
    .fade-enter-to {
        opacity: 1;
    }

    .fade-leave-from {
        opacity: 1;
    }
    .fade-leave-active {
        transition: all 0.5s;
    }
    .fade-leave-to {
        opacity: 0;
    }
</style>