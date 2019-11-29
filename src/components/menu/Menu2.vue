<template>
    <div>
        <ul class="menu__scheduler-list">
            <meal-type-2 v-for="(dayOfMeal,key) in listMeals" :key="key"
                         :dayOfMeal="dayOfMeal"
                         :typeOfMealsNumber="typeOfMealsNumber"
                         @modalShow="modalShow">
            </meal-type-2>
        </ul>
    </div>
</template>

<script>

  import MealType2 from "./MealType2";

  export default {
    name: "Menu2",
    props: ['listMeals', 'typeOfMealsNumber'],
    components: {
      "meal-type-2": MealType2
    },
    methods: {
      modalShow(id) {
        this.$emit('modalShow', id)
      }
    }
  }
</script>

<style scoped>
    .tabs__buttons--separate .tabs__btn {
        max-height: 50px;
    }

    .menu__scheduler-tabs-btn {
        min-height: 115px;
    }
</style>