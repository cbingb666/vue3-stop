<script lang="ts">
import { computed } from 'vue';
</script>

<script setup lang="ts">
// props
const props = withDefaults(
  defineProps<{
    name: string;
    prefix?: string;
    size?: string;
    color?: string;
  }>(),
  {
    size: '1em',
    prefix: 'icon',
    color: '#333',
  },
);

// computed
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<template>
  <svg
    aria-hidden="true"
    class="svg-icon"
    :width="props.size"
    :height="props.size"
  >
    <use :xlink:href="symbolId" :fill="props.color" />
  </svg>
</template>
