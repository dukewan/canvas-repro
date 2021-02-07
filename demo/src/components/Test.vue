<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <GridLayout columns="*" rows="*">
            <Label class="message" text="test canvas" col="0" row="0"/>
            <CanvasView
              id="canvasTarget"
              @draw="canvasTargetReady"
              left="0" top="0" width="100%" height="100%"
              />
            <CanvasView
              id="canvas"
              @draw="canvasReady" @touch="onCanvasTouch"
              left="0" top="0" width="100%" height="100%"
              />
        </GridLayout>
    </Page>
</template>

<script >
  export default {
    data () {
      return {
        canvas: null,
        canvasObj: null,
        canvasTarget: null,
        canvasTargetObj: null,
      }
    },
    methods: {
      canvasReady ({ object, canvas }) {
        this.canvas = canvas
        this.canvasObj = object
      },
      canvasTargetReady ({ object, canvas }) {
        this.canvasTarget = canvas
        this.canvasTargetObj = object
      },
      onCanvasTouch (args) {
        this.canvasObj.redraw()
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
