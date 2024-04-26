import { View, Text } from '@tarojs/components'
import { useLoad, navigateTo } from '@tarojs/taro'
import './index.scss'
import { show } from '@ebay/nice-modal-react'
import BasePage from '@/layout/BasePage'
import ModalDemo from '@/components/ModalDemo'


export default BasePage(function Index() {
  const onClick_showModal = () => {
    show(ModalDemo, { name: 'content from INDEX' })
  }

  return (
    <View className='index'>
      <Text>Hello taro!!</Text>
      <View onClick={() => { navigateTo({ url: '/pages/foo/index' }) }}>
        <Text >To Route FOO</Text>
      </View>
      <View>
        <Text onClick={onClick_showModal}>click me!</Text>
      </View>
    </View>
  )
})
