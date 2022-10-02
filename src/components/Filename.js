import React from 'react'
import CButton from '@coreui/react'

const Filename = () => {
  return (
    <div
    //   style={{
    //     display: 'flex',
    //     margin: 'auto',
    //     width: 400,
    //     flexWrap: 'wrap',
    //   }}
    >
      <input type="file" accept="image/*" style={{ display: 'none' }} id="contained-button-file" />
      <label htmlFor="contained-button-file">
        <CButton color="secondary">上传账单</CButton>
      </label>
    </div>
  )
}

export default React.memo(Filename)
