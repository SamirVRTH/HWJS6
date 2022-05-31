const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello 1st Vue component',
        counter: 0,
        tabs: ['one', 'two', 'three'],
        currentTab: 'one',
    },
    methods: {
        increase(step) {
            this.counter += step;
        }
    },
    computed: {
        currentComponent() {
            return `component-${this.currentTab}`;
        }
    },
    template: `<div>
                    <div>
                        <button
                            v-for="tab of tabs"
                            @click="currentTab = tab"
                        >{{ tab }}</button>
                    </div>
                    <component :is="currentComponent"></component>
<!--                <some-el-->
<!--                    :title="title"-->
<!--                    :counter="counter"-->
<!--                    :increase="increase"-->
<!--                    @increase-counter="increase"-->
<!--                >-->
<!--&lt;!&ndash;                    <p>i'm slot</p>&ndash;&gt;-->
<!--                </some-el>-->
<!--                <some-el-->
<!--                    :title="title"-->
<!--                    :counter="counter"-->
<!--                    :increase="increase"-->
<!--                    @increase-counter="increase"-->
<!--                ></some-el>-->
<!--                <some-el-->
<!--                    :title="title"-->
<!--                    :counter="counter"-->
<!--                    :increase="increase"-->
<!--                    @increase-counter="increase"-->
<!--                ></some-el>-->
<!--                <some-el-->
<!--                    :title="title"-->
<!--                    :counter="counter"-->
<!--                    :increase="increase"-->
<!--                    @increase-counter="increase"-->
<!--                ></some-el>-->
             </div>`,
  mounted() {
    console.log(this);
  },
});
