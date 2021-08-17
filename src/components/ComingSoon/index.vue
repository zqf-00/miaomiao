<template>
    <div class="movie_body">
        <ul>
            <li v-for="item in comingList" :key="item.id">
                <div class="pic_show"><img :src="item.img"></div>
                <div class="info_list">
                    <h2>{{item.nm}}</h2>
                    <p><span class="person">{{item.wish}}</span> 人想看</p>
                    <p>{{item.star}}</p>
                    <p>{{item.showInfo}}</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ComingSoon',
    data () {
        return {
            comingList: []
        }
    },
    mounted () {
        this.$http.get('/ajax/comingList?ci=20&token=&limit=10&optimus_uuid=A00E9120B55C11EB8687A3DEBF1CB27AFF97094A83F344C48513685DD2964C1A&optimus_risk_level=71&optimus_code=10').then((res) => {
            console.log(res);
            var msg = res.statusText
            if(msg === 'OK'){
                this.changeimage(res)
                this.comingList=res.data.coming
                // console.log(this.movieList)
            }else{
                console.log('没有获取到信息')
            }
        })
    },
    methods: {
    // w.h转换
    changeimage(res){
      var str=res.data.coming
      console.log(str.length)
      for(var i=0;i<str.length;i++){
        // console.log(str[i].img);
        str[i].img=str[i].img.replace(/w.h/,"170.230")
      }
      // console.log(str)
    }
  }
}
</script>

<style scoped>
#content .movie_body {
  flex: 1;
  overflow: auto;
}
.movie_body ul {
  margin: 0 12px;
  margin-bottom: 50px;
  overflow: hidden;
}
.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
}
.movie_body .pic_show {
  width: 64px;
  height: 90px;
}
.movie_body .pic_show img {
  width: 100%;
  height: 90px;
}
.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movie_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.movie_body .btn_mall,
.movie_body .btn_pre {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.movie_body .btn_pre {
  background-color: #3c9fe6;
}
</style>

