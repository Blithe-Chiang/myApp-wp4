import { View, Text } from '@tarojs/components'
import { useModal, create } from '@ebay/nice-modal-react'

const ModalDemo = create(({ name }: { name: string }) => {
  const modal = useModal()
  return (
    modal.visible && <View style={{
      backgroundColor: 'red',
      width: 200, height: 200,
    }}
      onClick={() => {
        console.log('sdfssdf')
        modal.hide()
      }}
    >
      <View>
        <Text>hello from modal</Text>
      </View>
      <View>
        <Text>name props: {name}</Text>
      </View>
    </View>
  )
});

export default ModalDemo
