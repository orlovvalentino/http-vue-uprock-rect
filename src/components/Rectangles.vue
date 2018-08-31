<template>
    <transition name="fade">
        <div
            @keyup.delete="remove"
            tabindex="0"
            @mousedown="draggable"
            class="div"
            :style="{
                left: item.left + 'px',
                top: item.top + 'px',
                width: item.width + 'px',
                height: item.height + 'px',
                backgroundColor:item.bg,
                zIndex:index
                 }"
        >
        </div>
    </transition>
</template>

<script>
  export default {
    props: ['item','index'],
    data() {
      return {}
    },
    methods:{
      remove() {
        this.$emit('remove');
      },
      draggable(ev) {
        const element = ev.target;
        const gt = element.getBoundingClientRect();
        const startX = this.getCoords(element).left;
        const startY = this.getCoords(element).top;
        const initialMouseX = ev.pageX;
        const initialMouseY = ev.pageY;
        function mousemove(e) {
          const dx = e.pageX - initialMouseX;
          const dy = e.pageY - initialMouseY;
          element.style.top = `${startY + dy}px`;
          element.style.left = `${startX + dx}px`;
          return false;
        }

        function mouseup() {
          document.removeEventListener('mousemove', mousemove);
          document.removeEventListener('mouseup', mouseup);
        }

        document.addEventListener('mousemove', mousemove);
        document.addEventListener('mouseup', mouseup);
      },
      getCoords(elem) {
        var box = elem.getBoundingClientRect();

        return {
          top: box.top + pageYOffset,
          left: box.left + pageXOffset
        };
      }
    }
  }
</script>
