<template>
  <div>
    <div class="section">
      <!--热门推荐-->
      <Slider :slides="slides"></Slider>
      <!--快讯-->
      <Announcement :kx="announcement"></Announcement>
    </div>
    <div class="section">
      <!--新书上架-->
      <Booklist :books="latestUpdated" heading="最新更新222" @onBookSelect="preview($event)"></Booklist>
    </div>
    <div class="section">
      <!--编辑推荐-->
      <Booklist :books="recommended" heading="编辑推荐333" @onBookSelect="preview($event)"></Booklist>
    </div>
    <ModelDialog ref="dialog" @dialogClose="closef($event)">
      <div slot="heading" >
        此处是header插槽的内容
        <div class="dismiss" @click.prevent="$refs.dialog.closef()">

        </div>
        <div>
          <img :src="selected.img_url" alt="">
        </div>
        <div>
          {{selected.title}}
        </div>
      </div>
      <div>
        这个div将自动默认插槽内容
      </div>
    </ModelDialog>
  </div>
</template>
<style>
  .announcement {
    font-size: 12px;
    padding:5px;
    background:#fff;
  }

  .announcement > label {
    padding: 3px 10px;
    margin: 3px 10px;
    background: #FACCB7;
    border-radius: 3px;
    color: #FF5102;

  }

  .announcement > span {
    padding: 3px 10px;
    color: #333;
    display:inline-block;
  }
</style>
<script>
import Slider from './components/Slider.vue'
import Booklist from './books/list.vue'
import Announcement from  './components/Announcement.vue'
import ModelDialog from './components/dialog.vue'
import t1 from '@/fixtures/sliders/t1.svg'
import t2 from '@/fixtures/sliders/t2.svg'
import s1 from '@/fixtures/covers/1.svg'
import s2 from '@/fixtures/covers/2.svg'
import s3 from '@/fixtures/covers/3.svg'
import s4 from '@/fixtures/covers/4.svg'
import s5 from '@/fixtures/covers/5.svg'
import s6 from '@/fixtures/covers/6.svg'
import faker from './fixtures/faker'
const debug=process.env.NODE_ENV!=='production'
  export default{

      data(){
    return{
      announcement:'今日上架的图书全部8折',
      selected:"",
      slides:[
        {id:1,img_url:t1},
        {id:2,img_url:t2},
      ],
      latestUpdated:[
        {id: 1,title: "揭开数据真相：从小白到数据分析达人",authors: ["Edward Zaccaro", "Daniel Zaccaro1"],img_url: s1},
        {id: 2,title: "揭开数据真相：从小白到数据分析达人",authors: ["Edward Zaccaro", "Daniel Zaccaro2"],img_url: s2},
        {id: 3,title: "揭开数据真相：从小白到数据分析达人",authors: ["Edward Zaccaro", "Daniel Zaccaro3"],img_url: s3},
        {id: 4,title: "揭开数据真相：从小白到数据分析达人",authors: ["Edward Zaccaro", "Daniel Zaccaro4"],img_url: s4},
        {id: 5,title: "揭开数据真相：从小白到数据分析达人",authors: ["Edward Zaccaro", "Daniel Zaccaro5"],img_url: s5},
        {id: 6,title: "揭开数据真相：从小白到数据分析达人",authors: ["Edward Zaccaro", "Daniel Zaccaro6"],img_url: s6}
      ],
      recommended:[
        {id: 1,title: "揭开数据真相：从小白到数据分析达人",authors: ["Edward Zaccaro", "Daniel Zaccaro"],img_url: s1},
        {id: 2,title: "揭开数据真相：从小白到数据分析达人",authors: ["Edward Zaccaro", "Daniel Zaccaro"],img_url: s2},
        {id: 3,title: "揭开数据真相：从小白到数据分析达人",authors: ["Edward Zaccaro", "Daniel Zaccaro"],img_url: s3},
        {id: 4,title: "揭开数据真相：从小白到数据分析达人",authors: ["Edward Zaccaro", "Daniel Zaccaro"],img_url: s4},
        {id: 5,title: "揭开数据真相：从小白到数据分析达人",authors: ["Edward Zaccaro", "Daniel Zaccaro"],img_url: s5},
        {id: 6,title: "揭开数据真相：从小白到数据分析达人",authors: ["Edward Zaccaro", "Daniel Zaccaro"],img_url: s6}
      ],

    }

  },
      components:{Slider,Booklist,Announcement,ModelDialog},
      methods:{
        created(){
          if(debug){
            const fakeData=faker.getHomeData()
            for(var prop in fakeData){
              this[prop]=fakeData[prop]
            }
          }else{
            this.$http.get('http://localhost:8094/api/latestUpdated').then(res=>{
              console.log(res)
              for(var prop in res.body){
                this[prop]=res.body[prop]
              }
            },err=>{
              console.log('获取数据失败：${error}')
            })
          }
        },
        mounted(){
        console.log(this.selected)

        },
        preview(book){
          console.log(book)
          this.selected=book
          console.log(this.selected.img_url)
          this.$refs.dialog.open()
        },
        closef(e){
          this.$refs.dialog.close()
        }

    },
    created(){
      if(debug){
        const fakeData=faker.getHomeData()
        for(var prop in fakeData){
          this[prop]=fakeData[prop]
        }
      }else{
        this.$http.get('http://localhost:8094/api/latestUpdated').then(res=>{
          console.log(res)
          for(prop in res.body){
            this[prop]=res.body[prop]
          }
        },err=>{
          console.log('获取数据失败：${error}')
        })
      }
    },

  }
</script>
