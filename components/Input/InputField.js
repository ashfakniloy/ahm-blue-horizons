import { ErrorMessage, Field } from "formik";

export const TextField = ({ ...props }) => {
  return (
    <div className="my-4 relative">
      <Field
        className="w-[300px] lg:w-[600px] bg-slate-200 outline-none p-2 border-2 border-transparent  focus:border-cyan-300 rounded"
        {...props}
      />
      <p className="absolute -bottom-4 text-red-500 text-xs">
        <ErrorMessage {...props} />
      </p>
    </div>
  );
};
