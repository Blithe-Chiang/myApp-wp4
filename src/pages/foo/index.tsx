import { View, Text } from '@tarojs/components'
import './index.scss'
import { show } from '@ebay/nice-modal-react'
import BasePage from '@/layout/BasePage'
import ModalDemo from '@/components/ModalDemo'

export default BasePage(function Foo() {
  const onClick_showModal = () => {
    show(ModalDemo, { name: 'content from FOO' })
  }
  return (
    <View className='index'>
      <Text>这是Foo页面</Text>
      <View>
        <Text onClick={onClick_showModal}>click me!</Text>
      </View>
    </View>
  )
})
