import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
  CRow,
  CFormSelect,
} from '@coreui/react'
import ReactMarkdown from 'react-markdown'
import { Filename } from 'src/components'

const importNotification = `
1. 下载微信账单:   我的->钱包->账单->常见问题->下载账单->用于个人对账->选择账单范围（**最多支持三个月**）
2. 下载支付宝账单: 我的->账单->点击右上方，选择开具交易流水证明->用于个人对账->选择账单范围->选择邮箱
`

const FamilyBills = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>导入账单</strong> <small>支付宝、微信等</small>
          </CCardHeader>
          <CCardBody>
            <ReactMarkdown className="text-medium-emphasis small">
              {importNotification}
            </ReactMarkdown>
            <CFormLabel htmlFor="exampleFormControlInput1">账单来源：</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormSelect aria-label="Default select example">
                <option value="wechat">微信</option>
                <option value="aliPay">支付宝</option>
                <option value="others">其他</option>CInputGroup
              </CFormSelect>
            </CInputGroup>
            <CFormLabel htmlFor="exampleFormControlInput1">备注：</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormTextarea aria-label="With textarea"></CFormTextarea>
            </CInputGroup>
            <CInputGroup className="mb-3">
              <Filename />
            </CInputGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FamilyBills
