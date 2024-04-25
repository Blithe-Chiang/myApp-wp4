import NiceModal from '@ebay/nice-modal-react'

export default function BasePage(Comp: any) {
  return (props) => (
    <NiceModal.Provider>
      <Comp {...props} />
    </NiceModal.Provider>
  )
}
