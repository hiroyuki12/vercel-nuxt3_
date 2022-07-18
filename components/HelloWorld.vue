<template>
    <div>
    <header className="QiitaApp-header">
        <br />
        <a href="https://mbp.hatenablog.com/entry/2022/07/13/234924" target="_blank" rel="noreferrer" >MacでNuxt 3、VercelでNuxt3 App、QiitaAPIで記事情報を取得して表示</a><br />
        <button @click="getQiitaData()">Vue.js</button>
        <button @click="getQiitaDataReact()">React</button>
        <div v-if="isClick">
            <table class="table table-striped">
                <tr v-for="(item, index) in displayQiitaDataList" :key="index" align="left">
                    <td class="text-left"><img :src="item.user.profile_image_url" width="50" height="50" loading="lazy" alt="img" />
<a :href="item.url" target="_blank" rel="noreferrer">{{ item.title }}</a> {{item.created_at}}</td>
                </tr>
            </table>
            Page: {{page}}, tag: Vue.js, Loading: {{isLoading}}
            <br />
            <p v-if="isLoading">
              Loading .... page: {{page}}/20posts/{{20*(page-1)+1}}</p>
            <p v-else>Not Loading. page: {{page}}/20posts/{{20*(page-1)+1}}</p>
            <div>
                <h3>記事数 {{ totalArticle }}コ</h3>// h3で文字サイズ調整すな←
            </div>
        </div>
    </header>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            userId: "",
            displayQiitaDataList: "",
            totalArticle: 0,
            totalLGTM: 0,
            isClick: false,
            page: 0,
            allQiitaData: [],
            isLoading: false,
        }
    },
    methods: {
        getNextPage: function() {
          window.onscroll = () => {
            if (
              window.innerHeight + document.documentElement.scrollTop !==
              document.documentElement.offsetHeight
            ) {
              return;
            }
            this.isLoading = true;
            this.getQiitaData();
          }
        },
        getQiitaData: function() {
            this.page = this.page + 1;
            axios.get(`https://qiita.com/api/v2/tags/Vue.js/items?page=${this.page}&per_page=20`, {})
            .then(res => {
                let allQiitaData = [];
                allQiitaData = this.allQiitaData.concat(res.data);

                let displayQiitaDataList = [];
                let totalLGTM = 0;
                allQiitaData.forEach(function (item) {
                    displayQiitaDataList.push(item);
                    //totalLGTM += item.likes_count;
                })
                // forEach内でthis.displayQiitaDataListへ格納できないので外でやる
                this.displayQiitaDataList = displayQiitaDataList.sort();
                this.totalLGTM = totalLGTM;
                // total記事数を取得
                this.totalArticle = displayQiitaDataList.length;
                // clickによる表示の制御
                this.isClick = true;
                this.allQiitaData = allQiitaData;
            }).catch(err => {
              //this.error = err.message;  // Request failed with status code 403
              this.error = "Rate limit exceeded";
            })
            this.isLoading = false;
        },
        getQiitaDataReact: function() {
            axios.get(`https://qiita.com/api/v2/tags/React/items?page=1&per_page=20`, {})
            .then(res => {
                let allQiitaData = [];
                allQiitaData = res.data;

                let displayQiitaDataList = [];
                let totalLGTM = 0;
                allQiitaData.forEach(function (item) {
                    displayQiitaDataList.push(item);
                    //totalLGTM += item.likes_count;
                })
                // forEach内でthis.displayQiitaDataListへ格納できないので外でやる
                this.displayQiitaDataList = displayQiitaDataList.sort();
                this.totalLGTM = totalLGTM;
                // total記事数を取得
                this.totalArticle = displayQiitaDataList.length;
                // clickによる表示の制御
                this.isClick = true;
            })
        },
    },
    mounted() {
      this.getNextPage();
    }
}

</script>
