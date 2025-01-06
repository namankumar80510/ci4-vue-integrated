// Components
const Home = {
    data() {
        return {
            message: ''
        }
    },
    mounted() {
        fetch('/api/home')
            .then(res => res.json())
            .then(data => this.message = data.message)
    },
    template: `
        <div>
            <h1>Welcome to Vue + CI4</h1>
            <p>{{ message }}</p>
        </div>
    `
}

const About = {
    template: `
        <div>
            <h1>About</h1>
            <p>This is the about page</p>
        </div>
    `
}

// Define routes
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    // Catch all route to redirect to home
    { path: '/:pathMatch(.*)*', redirect: '/' }
]

// Create router instance
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

// Create and mount Vue app
const app = Vue.createApp({
    template: `
        <div>
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
            </nav>
            <router-view></router-view>
        </div>
    `
})

// Use router
app.use(router)

// Mount app
app.mount('#app')