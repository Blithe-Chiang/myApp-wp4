/* eslint-disable react-hooks/rules-of-hooks */
import { Provider, ProviderHandle } from 'vfup-nice-modal-react'
import { useDidShow } from '@tarojs/taro'
import { useRef } from 'react'

export default function BasePage(Page: any) {
  return (props) => {
    const ref = useRef<ProviderHandle>()
    useDidShow(() => {
      ref.current && ref.current.reset()
    })
    return (
      <Provider ref={ref} >
        <Page {...props} />
      </Provider>
    )
  }
}
