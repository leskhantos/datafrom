<template>
    <div class="menu__scheduler-content">
        <slot class="menu__scheduler-desc" name="description"></slot>
        <p class="composed"><span class="orange">33</span><span class="yellow">33</span><span
                class="green">33</span></p>
        <slot class="menu__scheduler-calories" name="calories"></slot>
    </div>
</template>

<script>
  export default {
    name: "Recipe"
  }
</script>

<style scoped>

</style>