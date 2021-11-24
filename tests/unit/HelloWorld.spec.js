import Vuex from 'vuex'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HelloWorld.vue', () => {

  let actions
  let store

  beforeEach(() => {
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('renders props.msg when passed', () => {
    const msg = 'new message'
    HelloWorld.props.msg = msg
    console.log('###########', HelloWorld)
    expect(HelloWorld.props.msg).toMatch(msg)
  })
  it('get data', () => {
    const wrapper = shallowMount(HelloWorld)
    const count = wrapper.vm.count
    console.log('### data', count)
    expect(count).toBe(0)
  })
  it('increments counter value on click', async () => {
    const wrapper = mount(HelloWorld)
    const text = wrapper.find('#countMsg')
    expect(text.text()).toContain('Total clicks: 0')
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(text.text()).toContain('Total clicks: 1')
  })
  it('use vuex', async () => {
    const wrapper = shallowMount(HelloWorld, { store, localVue })
    const text = wrapper.find('#countMsg')
    expect(text.text()).toContain('Total clicks: 0')
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(text.text()).toContain('Total clicks: 1')
  })
})