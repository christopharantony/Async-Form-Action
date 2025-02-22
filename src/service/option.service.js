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

export const upvoteOpinionService = async (id) => {
  return await fetch(`${rootRoute}/${id}/upvote`, {
    method: "POST",
  });
};

export const downvoteOpinionService = async (id) => {
  return await fetch(`${rootRoute}/${id}/downvote`, {
    method: "POST",
  });
};
