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
    name: "ParagraphProfile",
    props: ['item', 'value', 'measure', 'icon']
  }
</script>

<style scoped>

</style>