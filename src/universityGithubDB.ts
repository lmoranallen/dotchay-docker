const UoB = {
    baseURL: "https://api.github.com/graphql",
    userName: process.env.REACT_APP_UNI_GITHUB_USERNAME, 
    headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.REACT_APP_UNI_GITHUB_TOKEN,
    },
};

export default UoB;