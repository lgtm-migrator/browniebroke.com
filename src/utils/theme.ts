export interface SiteTheme {
  white: string
  black: string
  blue: string
  spacings: string[]
  mdBreakpoint: string
  containerMaxWidth: string
  fontSizes: {
    base: string
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    h6: string
  }
  baseFont: string
  headersFont: string
}

export interface SiteThemeProps {
  theme: SiteTheme
}

const baseSpacer = 1
const spacers = [
  0,
  baseSpacer / 4,
  baseSpacer / 2,
  baseSpacer,
  baseSpacer * 1.5,
  baseSpacer * 3,
]

const baseFontSize = 1.25

export const theme: SiteTheme = {
  white: '#fffaff',
  black: '#0c2340',
  blue: '#3498DB',
  spacings: spacers.map((s) => `${s}rem`),
  mdBreakpoint: '768px',
  containerMaxWidth: `900px`,
  fontSizes: {
    base: `${baseFontSize}rem`,
    h1: `${baseFontSize * 1.7}rem`,
    h2: `${baseFontSize * 1.3}rem`,
    h3: `${baseFontSize * 1.15}rem`,
    h4: `${baseFontSize * 1.1}rem`,
    h5: `${baseFontSize}rem`,
    h6: `${baseFontSize * 0.9}rem`,
  },
  baseFont: 'Cabin Condensed, georgia, sans-serif',
  headersFont: 'Patua One',
}
