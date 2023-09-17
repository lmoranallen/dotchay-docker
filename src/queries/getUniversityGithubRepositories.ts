export const query = {
  query: `
  {
    viewer {
      repositories (first:15) {
        edges {
          node {
            name
            url
          }
        }
      }
    } 
  }
  `,
};