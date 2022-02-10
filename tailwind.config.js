const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities, matchUtilities, theme }) {

      // remember border width for resetting
      matchUtilities(
        {
          border: value => ({
            '--tw-border-left-width': value,
            '--tw-border-bottom-width': value,
          }),
          'border-l': value => ({
            '--tw-border-left-width': value,
          }),
          'border-x': value => ({
            '--tw-border-left-width': value,
          }),
          'border-b': value => ({
            '--tw-border-bottom-width': value,
          }),
          'border-y': value => ({
            '--tw-border-bottom-width': value,
          }),
        },
        { values: theme('borderWidth')}
      )

      addUtilities({
        'table.transpose': {
          display: 'grid',

          gridTemplateColumns: 'min-content min-content',
          gridTemplateRows: 'auto auto',
          gridTemplateAreas: '"caption caption" "head body"',
          '> caption': {
            gridArea: 'caption'
          },
          '> thead': {
            gridArea: 'head',
          },
          '> tbody': {
            gridArea: 'body',
            display: 'flex',
          },
          tr: {
            display: 'flex',
            flexDirection: 'column',
          }
        },
        'table.not-transpose': {
          display: 'table',
          gridTemplateColumns: 'none',
          gridTemplateRows: 'non',
          gridTemplateAreas: 'none',

          '> caption': {
            gridArea: 'auto',
          },

          '> thead': {
            gridArea: 'auto',
          },

          '> tbody': {
            gridArea: 'auto',
            display: 'table-row-group',
          },
          tr: {
            flexDirection: 'row',
            display: 'table-row'
          },
        },
        'table.transpose-border-collapse': {
          td: {
            borderLeftWidth: '0',
            '&:not(:last-child)': {
              borderBottomWidth: '0'
            }
          },
          'th:not(:last-child)': {
            borderBottomWidth: '0'
          }
        },
        'table.not-transpose-border-collapse': {
          td: {
            borderLeftWidth: 'var(--tw-border-left-width, inherit)',
            '&:not(:last-child)': {
              borderBottomWidth: 'var(--tw-border-bottom-width, inherit)'
            }
          },
          'th:not(:last-child)': {
            borderBottomWidth: 'var(--tw-border-bottom-width, inherit)'
          }
        }
      })
    })
  ],
}
