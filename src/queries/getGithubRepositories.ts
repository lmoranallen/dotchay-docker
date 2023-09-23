export const query = {
  query: `
  {
    viewer {
      repositories (last:12) {
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