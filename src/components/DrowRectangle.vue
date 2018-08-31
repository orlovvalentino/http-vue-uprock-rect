<template>

</template>

<script>
  export default {
    name: "DrowRectangle",
    data() {
      return {
        drowing: false,
        styles:{},
        item:{}
      }
    },
    created() {
      document.addEventListener('click', this.mouseClick);
    },
    methods:{
      mouseClick(ev) {
        if (!this.drowing && !ev.target.classList.contains('div')) {
          this.startRectangle(ev);
          document.addEventListener('mousemove', this.getDimensions);
          this.drowing = true;
        } else if(this.drowing){
          this.stopRectangle(ev);
          document.removeEventListener('mousemove', this.getDimensions);
          this.drowing = false;
        }
      },
      startRectangle(ev) {
        this.div = document.createElement('div');
        this.styles = this.div.style;
        this.div.setAttribute('tabindex', 1);
        this.styles.zIndex = 9999;
        this.styles.position = 'absolute';
        this.styles.backgroundColor = this.getRandomColor();
        this.styles.left = `${ev.pageX}px`;
        this.styles.top = `${ev.pageY}px`;
        this.item={
          left: ev.pageX,
          top: ev.pageY,
          bg: this.styles.backgroundColor
        }
        document.body.appendChild(this.div);
      },
      stopRectangle() {
        const gt = this.div.getBoundingClientRect();
        this.item.width = gt.width;
        this.item.height= gt.height;
        this.drowing = false;
        this.div.remove();
        this.$emit('newitem', this.item);
      },
      getDimensions(event) {
        const ev = event;
        if (this.drowing) {
          this.styles.width = `${ev.pageX - this.div.offsetLeft}px`;
          this.styles.height = `${ev.pageY - this.div.offsetTop}px`;
        }
      },
      getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i += 1) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      },
    }
  }
</script>
