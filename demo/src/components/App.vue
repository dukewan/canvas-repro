<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <GridLayout columns="*" rows="*">
            <Label class="message" :text="msg" col="0" row="0" @tap="onTap"/>
        </GridLayout>
    </Page>
</template>

<script >
  import Test from './Test'
  export default {
    data() {
      return {
        msg: 'Tap to test canvas'
      }
    },
    methods: {
      onTap (args) {
        this.$navigateTo(Test);
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
