import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
  it('get data', () => {
    const wrapper = shallowMount(HelloWorld)
    const count = wrapper.vm.count
    console.log('### data', count)
    expect(count).toBe(0)
  })
  it('increments counter value on click', async () => {
    const wrapper = shallowMount(HelloWorld)
    const text = wrapper.find('#countMsg')
    expect(text.text()).toContain('Total clicks: 0')
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(text.text()).toContain('Total clicks: 1')
  })
})