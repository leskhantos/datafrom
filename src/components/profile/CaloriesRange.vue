<template>
    <div class="range settings__range">
        <div class="range__container" ref="wrap" @click="wrapClick">
            <div class="range__line" ref="elem"></div>
            <button class="range__btn"
                    ref="tooltip"
                    style="transform: translateX(30%);"
                    @mousedown="moveStart"
                    @touchstart="moveStart"
            ></button>
        </div>
        <div class="range__values" v-if="range">
            <span
                v-for="(r, index) in range"
                :key="index"
            >
                {{r}}
            </span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "CaloriesRange",
    data () {
      return {
        flag: false,
        size: 0,
        currentValue: 0,
        currentSlider: 0,
        isComponentExists: true,
        interval: 1,
        lazy: false,
        realTime: false,
      }
    },
    props: {
      data: {
        type: Array,
        default: null
      },
      range: {
        type: Array,
        default: null
      },
      speed: {
        type: Number,
        default: 0.4
      },
      value: {
        type: [String, Number],
        default: 1500
      },
      min: {
        type: Number,
        default: 1500
      },
      max: {
        type: Number,
        default: 3000
      },
      isDisabled: {
        type: Boolean,
        default: false
      },
      draggable: {
        type: Boolean,
        default: true
      },
      paddingless: {
        type: Boolean,
        default: false
      },
    },
    computed: {
      slider () {
        return this.$refs.tooltip
      },
      val: {
        get () {
          return this.data ? this.data[this.currentValue] : this.currentValue
        },
        set (val) {
          if (this.data) {
            let index = this.data.indexOf(val)
            if (index > -1) {
              this.currentValue = index
            }
          } else {
            this.currentValue = val
          }
        }
      },
      currentIndex () {
        return (this.currentValue - this.minimum) / this.spacing
      },
      indexRange () {
        return [0, this.currentIndex]
      },
      minimum () {
        return this.data ? 0 : this.min
      },
      maximum () {
        return this.data ? (this.data.length - 1) : this.max
      },
      multiple () {
        let decimals = `${this.interval}`.split('.')[1]
        return decimals ? Math.pow(10, decimals.length) : 1
      },
      spacing () {
        return this.data ? 1 : this.interval
      },
      total () {
        if (this.data) {
          return this.data.length - 1
        }
        return (this.maximum - this.minimum) / this.interval
      },
      gap () {
        return this.size / this.total
      },
      position () {
        return ((this.currentValue - this.minimum) / this.spacing * this.gap)
      },
      limit () {
        return [0, this.size]
      },
      valueLimit () {
        return [this.minimum, this.maximum]
      }
    },
    methods: {
      bindEvents () {
        document.addEventListener('touchmove', this.moving, {passive: false})
        document.addEventListener('touchend', this.moveEnd, {passive: false})
        document.addEventListener('mousemove', this.moving)
        document.addEventListener('mouseup', this.moveEnd)
        document.addEventListener('mouseleave', this.moveEnd)
        window.addEventListener('resize', this.refresh)
      },
      unbindEvents () {
        window.removeEventListener('resize', this.refresh)
        document.removeEventListener('touchmove', this.moving)
        document.removeEventListener('touchend', this.moveEnd)
        document.removeEventListener('mousemove', this.moving)
        document.removeEventListener('mouseup', this.moveEnd)
        document.removeEventListener('mouseleave', this.moveEnd)
      },
      getPos (e) {
        this.realTime && this.getStaticData()
        return e.clientX - this.offset
      },
      wrapClick (e) {
        if (this.isDisabled || (!this.draggable && e.target.id === this.id)) return false
        let pos = this.getPos(e)
        this.setValueOnPos(pos)
      },
      moveStart () {
        if (!this.draggable) return false
        this.flag = true
        this.$emit('dragStart', this)
      },
      moving (e) {
        if (!this.flag || !this.draggable) return false
        e.preventDefault()
        if (e.targetTouches && e.targetTouches[0]) e = e.targetTouches[0]
        this.setValueOnPos(this.getPos(e), true)
      },
      moveEnd () {
        if (this.flag && this.draggable) {
          this.$emit('dragEnd', this)
          if (this.lazy && this.isDiff(this.val, this.value)) {
            this.syncValue()
          }
        } else {
          return false
        }
        this.flag = false
        this.setPosition()
      },
      setValueOnPos (pos, isDrag) {
        let range = this.limit
        let valueRange = this.valueLimit
        if (pos >= range[0] && pos <= range[1]) {
          this.setTransform(pos)
          let v = (Math.round(pos / this.gap) * (this.spacing * this.multiple) + (this.minimum * this.multiple)) / this.multiple
          this.setCurrentValue(v, isDrag)
        } else if (pos < range[0]) {
          this.setTransform(range[0])
          this.setCurrentValue(valueRange[0])
          if (this.currentSlider === 1) this.currentSlider = 0
        } else {
          this.setTransform(range[1])
          this.setCurrentValue(valueRange[1])
          if (this.currentSlider === 0) this.currentSlider = 1
        }
      },
      isDiff (a, b) {
        if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
          return true
        } else if (Array.isArray(a) && a.length === b.length) {
          return a.some((v, i) => v !== b[i])
        }
        return a !== b
      },
      setCurrentValue (val, bool) {
        if (val < this.minimum || val > this.maximum) return false
        if (this.isDiff(this.currentValue, val)) {
          this.currentValue = val
          if (!this.lazy || !this.flag) {
            this.syncValue()
          }
        }
        bool || this.setPosition()
      },
      setIndex (val) {
        val = this.spacing * val + this.minimum
        this.setCurrentValue(val)
      },
      setValue (val, speed) {
        if (this.isDiff(this.val, val)) {
          this.val = this.limitValue(val)
          this.syncValue()
        }
        this.$nextTick(() => this.setPosition(speed))
      },
      setPosition (speed) {
        if (!this.flag) this.setTransitionTime(speed === undefined ? this.speed : speed)
        else this.setTransitionTime(0)
        this.setTransform(this.position)
      },
      setTransform (val) {
        let value = val - ((this.$refs.tooltip.scrollWidth + 10) / 2)
        let translateValue = `translateX(${value}px)`
        this.slider.style.transform = translateValue
        this.slider.style.WebkitTransform = translateValue
        this.slider.style.msTransform = translateValue
      },
      setTransitionTime (time) {
        this.slider.style.transitionDuration = `${time}s`
        this.slider.style.WebkitTransitionDuration = `${time}s`
      },
      limitValue (val) {
        if (this.data) {
          return val
        }
        const inRange = (v) => {
          if (v < this.min) {
            return this.min
          } else if (v > this.max) {
            return this.max
          }
          return v
        }
        return inRange(val)
      },
      syncValue () {
        let val = this.val
        if (this.range) {
          this.$emit('callbackRange', this.range[this.currentIndex])
        }
        this.$emit('input', val)
      },
      getValue () {
        return this.val
      },
      getIndex () {
        return this.currentIndex
      },
      getStaticData () {
        if (this.$refs.elem) {
          this.size = this.$refs.elem.offsetWidth
          this.offset = this.$refs.elem.getBoundingClientRect().left
        }
      },
      refresh () {
        if (this.$refs.elem) {
          this.getStaticData()
          this.setPosition()
        }
      },
    },
    watch: {
      value (val) {
        if (this.flag) this.setValue(val)
        else this.setValue(val, this.speed)
      },
      max () {
        let resetVal = this.limitValue(this.val)
        this.setValue(resetVal)
        this.refresh()
      },
      min () {
        let resetVal = this.limitValue(this.val)
        this.setValue(resetVal)
        this.refresh()
      }
    },
    mounted () {
      this.isComponentExists = true
      this.$nextTick(() => {
        if (this.isComponentExists) {
          this.getStaticData()
          this.setValue(this.limitValue(this.value), 0)
          this.bindEvents()
        }
      })
    },
    beforeDestroy () {
      this.isComponentExists = false
      this.unbindEvents()
    }
  }
</script>

<style scoped>

</style>
