import React from 'react'
import { CButton } from '@coreui/react'

const Filename = () => {
  return (
    <div>
      <input type="file" accept="image/*" style={{ display: 'none' }} id="contained-button-file" />
      <label htmlFor="contained-button-file">
        <CButton color="secondary" component="span">
          Upload
        </CButton>
      </label>
    </div>
  )
}

export default React.memo(Filename)
