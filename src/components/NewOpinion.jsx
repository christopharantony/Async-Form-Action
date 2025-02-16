import { use } from "react";
import { useActionState } from "react";
import { INITIAL_VALUES } from "../constants";
import { OpinionsContext } from "../store/opinions-context";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);
  const newOptionAction = async (previousState, formData) => {
    try {
      const userName = formData.get("userName");
      const title = formData.get("title");
      const body = formData.get("body");

      const errors = [];

      if (!userName || !title || !body) {
        errors.push("All fields are required.");
      }

      const values = { userName, title, body };

      if (errors.length === 0) {
        await addOpinion(values);
        return {
          initialValues: INITIAL_VALUES,
          errors,
        };
      } else {
        return {
          initialValues: values,
          errors,
        };
      }
    } catch (error) {
      return {
        ...previousState,
        errors: [error.message],
      };
    }
  };

  const [formState, formAction, pending] = useActionState(newOptionAction, {
    errors: [],
    initialValues: INITIAL_VALUES,
  });
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.initialValues.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.initialValues.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.initialValues.body}
          ></textarea>
        </p>

        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <p className="actions">
          {pending ? (
            <button disabled>Submitting...</button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </p>
      </form>
    </div>
  );
}
