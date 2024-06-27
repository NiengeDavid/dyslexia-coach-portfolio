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

export const about = `*[_type == "about"] {
  heading,
  xlug,
  mantra,
  image1 {
    asset -> {
      url
    }
  },
  image2 {
    asset -> {
      url
    }
  },
  alt1,
  alt2,
  p1
}`

export const aboutMe = `*[_type == "aboutme"] | order(_createdAt asc) {
  content,
}`

export const featured = `*[_type == "featured"] {
  logo {
    asset -> {
      url
    }
  },
  alt,
  link
}`

export const sections =  `*[_type == "sections"] | order(_createdAt asc) {
  title,
  description,
}`

export const services = `*[_type == "services"] {
  image {
    asset -> {
      url
    }
  },
  title,
  description,
  link
}`

export const courses = `*[_type == "courses"] {
  image {
    asset -> {
      url
    }
  },
  title,
  description,
  url,
  whatsapp
}`

export const products = `*[_type == "products"] {
  image {
    asset -> {
      url
    }
  },
  title,
  amount,
  url,
  btn
}`

export const partners = `*[_type == "partners"] {
  logo {
    asset -> {
      url
    }
  },
  alt,
  link
}`

export const socials = `*[_type == "socails"] | order(_createdAt asc) {
  logo {
    asset -> {
      url
    }
  },
  alt,
  url
}`