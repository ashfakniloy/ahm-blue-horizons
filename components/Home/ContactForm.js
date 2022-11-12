import * as Yup from "yup";
import { Formik, Form } from "formik";
import { TextField } from "../Input/InputField";

function ContactForm() {
  const initialvalues = {
    name: "",
    email: "",
    number: "",
    message: "",
  };

  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    number: Yup.string().required("Phone No is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="">
      <h3 className="text-xl font-bold text-center lg:text-left text-cyan-600">
        Have Questions? Drop a Message:
      </h3>
      <Formik
        initialValues={initialvalues}
        validationSchema={validate}
        onSubmit={handleSubmit}
        // enableReinitialize
      >
        {(formik) => (
          <Form>
            <div className="flex flex-col items-center">
              <TextField placeholder="Your Name *" name="name" type="text" />
              <TextField placeholder="Email *" name="email" type="text" />
              <TextField
                placeholder="Phone Number *"
                name="number"
                type="text"
              />
              <TextField
                placeholder="Message *"
                name="message"
                type="text"
                as="textarea"
                rows="3"
              />

              <button
                type="submit"
                className="self-end mt-1 bg-custom-blue4 text-white px-5 lg:px-8 py-3 font-bold rounded uppercase active:scale-95 transition-all duration-200"
                disabled={formik.isSubmitting}
                aria-label="send message"
              >
                {formik.isSubmitting ? "sending message" : "send message"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
