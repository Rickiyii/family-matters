import React from 'react'
import { CButton } from '@coreui/react'

class Filename extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cButtonText: '上传账单',
      cButtonVariant: null,
    }
  }

  handleChange = (event) => {
    const file = event.target.files[0]
    this.uploaded(file)
  }

  uploaded = (file) => {
    const name = file ? file.name : this.state.cButtonText
    this.setState({
      cButtonText: name,
      cButtonVariant: 'ghost',
    })
  }

  render() {
    return (
      <div onChange={this.handleChange}>
        <input
          type="file"
          accept=".csv,.xls,.xlsx"
          style={{ display: 'none' }}
          id="contained-button-file"
        />
        <label htmlFor="contained-button-file">
          <CButton
            id="buttonFile"
            color="secondary"
            variant={this.state.cButtonVariant}
            component="span"
          >
            {this.state.cButtonText}
          </CButton>
        </label>
      </div>
    )
  }
}

export default Filename
