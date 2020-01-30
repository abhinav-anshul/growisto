export const data = [
  {
    component: "Section",
    props: {
      h2: "Section 1 Header",
      text: "Section 1 summary text",
      children: [
        {
          component: "Col",
          props: {
            className: "col",
            children: [
              {
                component: "Card",
                props: {
                  title: "Blog",
                  link: "/blog/",
                  text:
                    "Get updates and advice on senior healthcare straight from our blog"
                }
              }
            ]
          }
        },
        {
          component: "Col",
          props: {
            className: "col",
            children: [
              {
                component: "Card",
                props: {
                  title: "Blog",
                  link: "/blog/",
                  text:
                    "Get updates and advice on senior healthcare straight from our blog"
                }
              }
            ]
          }
        },
        {
          component: "Col",
          props: {
            className: "col",
            children: [
              {
                component: "Card",
                props: {
                  title: "Blog",
                  link: "/blog/",
                  text:
                    "Get updates and advice on senior healthcare straight from our blog"
                }
              }
            ]
          }
        }
      ]
    }
  },
  {
    component: "Row",
    props: {
      children: [
        {
          component: "Col",
          props: {
            className: "col",
            children: [
              {
                component: "Markdown",
                props: {
                  text: `## Features
  
  - **Fast:** since it's basically one regex and a huge if statement
  - **Tiny:** it's 1kb of gzipped ES3
  - **Simple:** pass a Markdown string, get back an HTML string                  
  `
                }
              }
            ]
          }
        },
        {
          component: "Col",
          props: {
            className: "col-6",
            children: [
              {
                component: "Row",
                props: {
                  children: [
                    {
                      component: "Col",
                      props: {
                        children: [
                          {
                            component: "Tag",
                            props: {
                              children: "I am sub sub child",
                              className: "sub sub text",
                              tag: "div"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          component: "Col",
          props: {
            children: [
              {
                component: "Tag",
                props: {
                  children: "I am sub sub child",
                  className: "sub sub text",
                  tag: "div"
                }
              }
            ]
          }
        }
      ]
    }
  },
  {
    component: "Row",
    props: {
      children: [
        {
          component: "Col",
          props: {
            className: "col",
            children: [
              {
                component: "Card",
                props: {
                  title: "Blog",
                  link: "/blog/",
                  text:
                    "Get updates and advice on senior healthcare straight from our blog"
                }
              }
            ]
          }
        },
        {
          component: "Col",
          props: {
            className: "col",
            children: [
              {
                component: "Card",
                props: {
                  title: "Blog",
                  link: "/blog/",
                  text:
                    "Get updates and advice on senior healthcare straight from our blog"
                }
              }
            ]
          }
        },
        {
          component: "Col",
          props: {
            className: "col",
            children: [
              {
                component: "Card",
                props: {
                  title: "Blog",
                  link: "/blog/",
                  text:
                    "Get updates and advice on senior healthcare straight from our blog"
                }
              }
            ]
          }
        }
      ]
    }
  }
];
