<script>
export default {
    name: "Navigation"
}
</script>

<template>
    <div class="nav navbar px-3">
        <div class="navbar-brand">
            <router-link to="/">
                <img src="https://res.cloudinary.com/spaboot/image/upload/logo" height="20"/>
            </router-link>
        </div>
        <div @click="$router.push({name: 'faqs'})">FAQ</div>
    </div>
</template>

<style scoped>
</style>
