<template>
    <TresCanvas v-if="isMounted" clear-color="#82DBC5" window-size preset="realistic" style="height:100%; width:100%">
        <OrbitControls/>
        <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 0]" />
        <Box :args="[1, 1, 1]" color="orange" />
        <TresAmbientLight :intensity="1" />
    </TresCanvas>
</template>

<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { OrbitControls, Box } from '@tresjs/cientos'
import { onMounted } from 'vue';
import { ref } from 'vue';

const isMounted = ref(false);

onMounted(() => {
    isMounted.value = true;
});
</script>
