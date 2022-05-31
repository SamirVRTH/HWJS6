Vue.component('component-one', {
    template: `<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias animi delectus ducimus ex in laudantium, nam qui sunt temporibus veritatis vitae. Aliquam eaque et ipsam nemo odit similique voluptate!</div>`
});
Vue.component('component-two', {
    template: `<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci architecto at aut blanditiis culpa cum dignissimos doloribus eaque, esse hic incidunt laboriosam mollitia nihil, placeat quae qui quidem ut!</div>`
});
Vue.component('component-three', {
    template: `<div>Lorem ipsum dolor sit amet, ptate!</div>`
});

const childElement = {
    name: 'child-element',
    template: '<p>Child component</p>'
};

Vue.component('some-el', {
    props: ['title', 'counter', 'increase'],
    data() {
        return {
            // title: 'Hello component',
        };
    },
    components: {
      // 'supa-dupa-component': childElement,
        childElement,
    },
    methods: {
        getChild() {
            console.log(this.$refs.child);
        }
    },
    computed: {
    },
    template: `<div>
<!--                   <div>{{ title }}</div>-->
                   <slot/>
                   <childElement ref="child"></childElement>
<!--                    <button @click="counter++">{{ counter }}</button>-->
<!--                    <button @click="$parent.counter++">{{ counter }}</button>-->
<!--                    <button @click="increase">{{ counter }}</button>-->
<!--                    <button @click="$emit('increase-counter', 2)">{{ counter }}</button>-->
<!--                    <button @click="getChild">Child</button>-->
                    <slot>
                        <p>Default</p>
                    </slot>
               </div>`,
    mounted() {
        console.log(this);
    },
});
