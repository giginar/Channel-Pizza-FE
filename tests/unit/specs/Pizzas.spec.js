import { render } from '@vue/server-test-utils'
import Pizzas from './src/components/Pizzas.vue'

describe('Pizzas', () => {
  it('renders a div', async () => {
    const wrapper = await render(Pizzas)
    expect(wrapper.text()).toContain('<div></div>')
  })
})