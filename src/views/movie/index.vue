<template>
  <div id="main">
    <Header title="喵喵电影" />
    <div id="content">
      <div class="movie_menu">
        <router-link  to="/movie/city" custom v-slot="{href,navigate,isActive}">
          <div :href="href" @click="navigate" :active="isActive" :class="[isActive && 'router-link-active']" class="city_name">
            <span>大连</span><i class="iconfont icon-lower-triangle"></i>
          </div>
        </router-link>
        <div class="hot_swtich">
          <router-link to="/movie/nowplaying" custom v-slot="{href,navigate,isActive}">
            <div :href="href" @click="navigate" :active="isActive" :class="[isActive && 'router-link-active']" class="hot_item">
            正在热映
            </div>
          </router-link>
          <router-link to="/movie/comingsoon" custom v-slot="{href,navigate,isActive}">
            <div :href="href" @click="navigate" :active="isActive" :class="[isActive && 'router-link-active']" class="hot_item">
            即将上映
            </div>
          </router-link>
        </div>
        <router-link to="/movie/search" custom v-slot="{href,navigate,isActive}">
          <div :href="href" @click="navigate" :active="isActive" :class="[isActive && 'router-link-active']" class="search_entry">
            <i class="iconfont icon-sousuo"></i>
          </div>
        </router-link>
      </div>
      <router-view v-slot="{ Component }">
        <transition>
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
export default {
  name: "movie",
  components: {
    Header,
    TabBar,
  },
};
</script>

<style>
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .city_name.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_item.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
</style>