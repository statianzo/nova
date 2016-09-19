import React from 'react'
import {
  colors,
  spacing,
  borderRadii,
  borderSizes,
} from '../data/styleGuide'
import Link from './Link'

const Section = ({src}) => (
  <Link href={src}>
    <img
      style={{
        border: `${borderSizes.small}px solid ${colors.decoration.light}`,
        borderRadius: borderRadii.medium,
        width: '100%',
        marginBottom: spacing.medium,
      }}
      src={src}
      role='presentation'
    />
  </Link>
)

Section.propTypes = {
  src: React.PropTypes.string.isRequired,
}

export default Section
