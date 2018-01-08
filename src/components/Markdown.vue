<template>
  <div class="markdown-textview" ref="codeview" v-html="content"></div>
</template>
<style lang="scss">
.markdown-textview{
    * {
        max-width: 100%;
    }
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    line-height: 1.6em;
    background-color: #fafafa;
    border: 1px solid #eee;
    border-radius: 0.5em; 
    padding: 1em;
    font-size: 14px;
    box-sizing: border-box;
    word-break: break-all;
    word-wrap: normal;
    white-space: wrap;
    color: #555;

    a[href] {
        color: #09a;
    }
    blockquote {
        border-left: 0.3em solid #089;
        margin-left: 0;
        padding-left: 1em;
        margin-right: 0;
        padding-right: 0.5em;
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0.5em 0;
    }
    b {
        font-weight: 900;
    }
    cite,
    small {
        font-size: 0.7em;
        color: #888;
    }
    ul,ol {
        margin: 0;
    }
    code {
        background: #eee;
        padding: 0.5em;
        border-radius: 0.5em;
        border: 1px solid #ddd; 
        display: block;
        font-size: 0.85em;
        white-space: normal;
        text-align: left;
    }
    p:last-child {
        margin-bottom: 0;
    }
    table {
        border-collapse: collapse;
        font-size: 0.85em;
        tr:nth-child(2n) {
            background-color: #fff; 
        }
        td {
            padding: 0.5em;
            border: 1px solid #ccc;
            border-spacing: 0;
        }
    }
}
.markdown-textview::before{
    content: 'html/markdown';
    color: #888;
    font-style: italic;
    font-size: 0.75em;
    margin-top: -0.6em;
    margin-bottom: 1em;
    display: block; 
}
</style>

<script>
import marked from 'marked'
/* 通过markdown-loader加载md文件，已经自动转换为html，可直接使用 */
import readMe from '@/assets/test.md'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

export default {
  created () {
    window.hljs.initHighlightingOnLoad()
  },
  mounted () {
    /* 语法高亮 */
    window.hljs.highlightBlock(this.$refs.codeview)
  },
  computed: {
    content () {
      /* readMe是已经转换过的内容，可直接返回 */
      //return marked(readMe)
      /* 将markdown内容转换为html */
      return marked('# 标题 \n > 段落 \n')
    }
  }
}
</script>