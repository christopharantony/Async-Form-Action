import React from "react";
import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <p className="actions">
      {pending ? (
        <button disabled>Submitting...</button>
      ) : (
        <button type="submit">Submit</button>
      )}
    </p>
  );
};

export default SubmitBtn;
