const Home = {
    template: '<div>This is Home</div>'
}
const Foo = {
    template: '<div>This is {{ msg }}</div>',
    data() {
        return {
            msg: 'Heyy There testing'
        }
    },
}
const Bar = {
    template: '<div>This is Bar {{ $route.params.id }}</div>'
}

const router = new VueRouter({
    mode: 'history',
    base: 'website',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/foo',
            name: 'foo',
            component: Foo
        },
        {
            path: '/bar/:id',
            name: 'bar',
            component: Bar
        }
    ]
})

new Vue({
    router,
    template: `
    <div id="app">
      <h1>Named Routes</h1>
      <p>Current route name: {{ $route.name }}</p>
      <ul>
        <li><router-link :to="{ name: 'home' }">home</router-link></li>
        <li><router-link :to="{ name: 'foo' }">foo</router-link></li>
        <li><router-link :to="{ name: 'bar', params: { id: 123 }}">bar</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')