<template>
  <section>
    <h3>
      Playground
      <span class="bg-green bs-rounded py-1 t-white">new!</span>
      <span class="bg-purple bs-rounded py-1 t-white">test</span>
    </h3>
    <p class="tw-light t-2 mb-3">
      Try the framework here, copy some code from components examples, paste it here and... ¡voilá!
    </p>

    <div class="flow">
      <div class="col-12 col-md-6 pr-md-2">
        <MonacoEditor
          height="500"
          language="html"
          :code="code"
          :editorOptions="options"
          theme="vs"
          :changeThrottle="2000"
          @mounted="onMounted"
          @codeChange="onCodeChange">
        </MonacoEditor>
      </div>
      <div class="col-12 col-md-6 pl-md-2" v-html="playground"></div>
    </div>
  </section>
</template>

<script>
import MonacoEditor from 'vue-monaco-editor'

export default {
  components: {
    MonacoEditor
  },

  data () {
    return {
      playground: null,
      code: '<!-- Play with me! Try some code -->\n',
      options: {
        selectOnLineNumbers: false,
        renderIndentGuides: true,
        autoIndent: true
      }
    }
  },

  methods: {
    onMounted (editor) {
      this.editor = editor
    },
    onCodeChange (editor) {
      this.playground = this.editor.getValue()
    }
  }
}
</script>
