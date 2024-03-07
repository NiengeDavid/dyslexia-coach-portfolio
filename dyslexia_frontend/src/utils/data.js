export const slider = `*[_type == "slider"] | order(_createdAt desc) {
    image {
      asset -> {
        url
      }
    },
    hint,
    alt,
    solution
}`

export const navfeed = `*[_type == "navbar"] {
  logo {
    asset -> {
      url
    }
  },
  yourname,
  button
}`

export const menu = `*[_type == "menu"] | order(_createdAt asc) {
  item,
}`