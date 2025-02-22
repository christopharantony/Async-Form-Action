const rootRoute = "http://localhost:3000/opinions";

export const findAllOptions = async () => {
  return fetch(rootRoute);
};

export const saveOpinion = async (opinion) => {
  return await fetch(rootRoute, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(opinion),
  });
};
