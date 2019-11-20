<template>
    <div class="profile__field">
        <slot name="item"></slot>
        <p class="profile__input">
            <slot name="icon"></slot>
            <slot name="label"></slot>
        </p>
    </div>
</template>

<script>
  export default {
    name: "ParagraphProfile"
  }
</script>

<style scoped>

</style>