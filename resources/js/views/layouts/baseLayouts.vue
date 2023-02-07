<template>
    <div id="layout-wrapper">
        <top-nav-bar></top-nav-bar>
        <div class="vertical-overlay"></div>
        <div class="main-content">
            <div class="page-content">
                <div class="container-fluid">
                    <router-view></router-view>
                </div>
            </div>
            <footer></footer>
        </div>
    </div>
</template>

<script>
    import TopNavBar from "./topNavBar";
    export default {
        name: "baseLayouts",
        components: {TopNavBar}
    }
</script>

<style scoped>

</style>
