<template>
    <div class="app-menu navbar-menu">
        <!-- LOGO -->
        <div class="navbar-brand-box">
            <!-- Dark Logo-->
            <router-link to="/admin/dashboard" class="logo logo-dark">
                <span class="logo-sm">
                    <img :src="showData(Config.config, 'logo')" alt="" height="22">
                </span>
                <span class="logo-lg">
                    <img :src="showData(Config.config, 'logo')" alt="" height="17">
                </span>
            </router-link>
            <!-- Light Logo-->
            <router-link to="/admin/dashboard" class="logo logo-light">
                <span class="logo-sm">
                    <img :src="showData(Config.config, 'logo')" alt="" height="22">
                </span>
                <span class="logo-lg">
                    <img :src="showData(Config.config, 'logo')" alt="" height="17">
                </span>
            </router-link>
            <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                <i class="ri-record-circle-line"></i>
            </button>
        </div>

        <div id="scrollbar">
            <div class="container-fluid">

                <div id="two-column-menu">
                </div>
                <ul class="navbar-nav" id="navbar-nav">
                    <template v-for="(menu, index) in Config.menus">
                        <template v-if="arrLength(menu.submenus) === 0">
                            <li class="nav-item">
                                <router-link class="nav-link menu-link" :to="menu.link">
                                    <i class="ri-honour-line"></i> <span data-key="t-widgets">{{menu.display_name}}</span>
                                </router-link>
                            </li>
                        </template>
                        <template v-else>
                            <li class="nav-item">
                                <a class="nav-link menu-link" :href="`#${menu.name}_${index}`" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                                    <i class="ri-dashboard-2-line"></i> <span data-key="t-dashboards">{{menu.display_name}}</span>
                                </a>
                                <div class="collapse menu-dropdown" :id="`${menu.name}_${index}`">
                                    <ul class="nav nav-sm flex-column">
                                        <template v-for="(submenu, sIndex) in menu.submenus">
                                            <template v-if="arrLength(submenu.submenus) === 0">
                                                <li class="nav-item">
                                                    <router-link :to="submenu.link" class="nav-link"> {{submenu.display_name}} </router-link>
                                                </li>
                                            </template>
                                            <template v-else>
                                                <li class="nav-item">
                                                    <a :href="`#${submenu.name}_${sIndex}`"class="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarEmail" data-key="t-email">{{submenu.display_name}}</a>
                                                    <div class="collapse menu-dropdown" :id="`${submenu.name}_${sIndex}`">
                                                        <ul class="nav nav-sm flex-column">
                                                            <template v-for="(subSubMenu, sSIndex) in submenu.submenus">
                                                                <li class="nav-item">
                                                                    <router-link :to="subSubMenu.link" class="nav-link" data-key="t-mailbox"> {{subSubMenu.display_name}} </router-link>
                                                                </li>
                                                            </template>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </template>
                                        </template>
                                    </ul>
                                </div>
                            </li>

<!--                            <li class="nav-item">-->
<!--                                <a class="nav-link menu-link" href="#sidebarApps" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarApps">-->
<!--                                    <i class="ri-apps-2-line"></i> <span data-key="t-apps">Apps</span>-->
<!--                                </a>-->
<!--                                <div class="collapse menu-dropdown" id="sidebarApps">-->
<!--                                    <ul class="nav nav-sm flex-column">-->
<!--                                        <li class="nav-item">-->
<!--                                            <a href="apps-calendar.html" class="nav-link" data-key="t-calendar"> Calendar </a>-->
<!--                                        </li>-->
<!--                                        <li class="nav-item">-->
<!--                                            <a href="#sidebarEmail" class="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarEmail" data-key="t-email">Email</a>-->
<!--                                            <div class="collapse menu-dropdown" id="sidebarEmail">-->
<!--                                                <ul class="nav nav-sm flex-column">-->
<!--                                                    <li class="nav-item">-->
<!--                                                        <a href="apps-mailbox.html" class="nav-link" data-key="t-mailbox"> Mailbox </a>-->
<!--                                                    </li>-->
<!--                                                </ul>-->
<!--                                            </div>-->
<!--                                        </li>-->
<!--                                    </ul>-->
<!--                                </div>-->
<!--                            </li>-->
                        </template>
                    </template>
                </ul>
            </div>
            <!-- Sidebar -->
        </div>

        <div class="sidebar-background"></div>
    </div>
</template>

<script>
    export default {
        name: "sideNavBar",
        mounted() {
            this.getConfigurations();
        }
    }
</script>

<style scoped>

</style>