const apiService = {
  get: async function (url: string): Promise<any> {
    console.log("working", url);

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(response => response.json())
        .then((data) => {
          console.log("data", data);

          return resolve(data);
        })
        .catch((error) => reject(error));
    });
  },
};
export default apiService;
