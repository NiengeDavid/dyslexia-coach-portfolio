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

export const navbar = `*[_type == "navbar"] {
  logo {
    asset -> {
      url
    }
  },
  yourname,
  button
}`