<template>
    <div class="menu__scheduler-content">
        <slot class="menu__scheduler-desc" name="description"></slot>
        <p class="composed">
            <slot name="proteins" class="orange"></slot>
            <slot name="fats" class="yellow"></slot>
            <slot name="carbohydrates" class="green"></slot>
        </p>
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