import React from 'react'
import {
  colors,
  fontSizes,
  fontWeights,
  spacing,
  lineHeights,
} from '../data/styleGuide'

export const levelSpecificStyles = {
  1: {
    color: colors.cyan,
    fontSize: fontSizes.xxlarge,
    lineHeight: lineHeights.xxlarge,
    textAlign: 'center',
  },
  2: {
    color: colors.gray5,
    fontSize: fontSizes.large,
    textAlign: 'center',
    marginBottom: spacing.medium,
  },
  3: {
    color: colors.gray5,
    fontSize: fontSizes.medium,
    textTransform: 'uppercase',
    marginBottom: spacing.small,
  },
  4: {
    color: colors.cyan,
    fontSize: fontSizes.xlarge,
    lineHeight: 1,
    marginBottom: spacing.xsmall,
  },
}

const Heading = ({
  children,
  level,
}) => (
  <div style={{
    fontWeight: fontWeights.light,
    ...levelSpecificStyles[level],
  }}>
    {children}
  </div>
)

Heading.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
  ]),
  level: React.PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
}

export default Heading
