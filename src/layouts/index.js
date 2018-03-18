import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { rhythm } from '../utils/typography'

import './index.scss'

const TemplateWrapper = ({ children }) => {
  return (
    <div className="container">
      <div>{children()}</div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
