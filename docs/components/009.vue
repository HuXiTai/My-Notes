<template>
  <div class="bigBox">
    <div id="box" @mousedown="onmousedown"></div>
  </div>
</template>

<script>
export default {
  methods: {
    onmousedown(e) {
      var deltaX = e.offsetX;
      var deltaY = e.offsetY;
      document.onmousemove = function (e) {
        var moveX = e.pageX;
        var moveY = e.pageY;
        var left = moveX - deltaX;
        var top = moveY - deltaY;
        console.log(window.innerWidth);
        var maxWidth = window.innerWidth - box.offsetWidth;
        var maxHeight = window.innerHeight - box.offsetHeight;
        left = left <= 20 ? 0 : left > maxWidth - 20 ? maxWidth : left;
        top = top <= 20 ? 0 : top > maxHeight - 20 ? maxHeight : top;
        box.style.left = left + "px";
        box.style.top = top + "px";
      };
      document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
  },
};
</script>

<style scoped>
.bigBox {
  height: 100px;
}

#box {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #ff0000;
}
</style>
