<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tags></v-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import vHead from '@/components/Header.vue';
    import vSidebar from '@/components/Sidebar.vue';
    import vTags from '@/components/Tags.vue';
    //import bus from '../common/bus';
    export default {
        data(){
            return {
                collapse: false
            }
        },
        components:{
            vHead, vSidebar, vTags
        },
        created(){
            Vue.$on('collapse', msg => {
                this.collapse = msg;
            });
        },
		mounted(){
			
		}
    }
</script>
