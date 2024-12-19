// import { useFormik } from "formik";
// import * as Yup from "yup";


// import Input from "components/Input/Input";
// import {
//   Checkbox,
//   CheckboxContainer,
//   CheckboxLabel,
//   EmployeeFormContainer,
// } from "./styles";
// import Button from "components/Button/Button";
// import { EmployeeFormValue, EMPLOYEE_FIELD_NAMES } from "./types";

// function EmployeeForm() {
//   const validationSchema = Yup.object().shape({
//     [EMPLOYEE_FIELD_NAMES.NAME]: Yup.string()
//       .required("Required field")
//       .test("check min length", "Min 2 symbols", (value) => value.length >= 2)
//       .test(
//         "check max length",
//         "Max 50 symbols",
//         (value) => value.length <= 50
//       ),
//     [EMPLOYEE_FIELD_NAMES.SURNAME]: Yup.string()
//       .required("Required field")
//       .test(
//         "check max length",
//         "Max 15 symbols",
//         (value) => value.length <= 15
//       ),
//     [EMPLOYEE_FIELD_NAMES.AGE]: Yup.number()
//       .min(18, "Min age 18")
//       .max(80, "Max age 80"),
//     [EMPLOYEE_FIELD_NAMES.JOB_TITLE]: Yup.string()
//       .required("Required field")
//       .test(
//         "check max length",
//         "Max 30 symbols",
//         (value) => value.length <= 30
//       ),
//     [EMPLOYEE_FIELD_NAMES.AGREEMENT]: Yup.boolean().oneOf(
//       [true],
//       "Accept agreement"
//     ),

// import { EmployeeFormValue, EMPLOYEES_FORM_NAMES } from "./type";
// import {
//   EmployeeFormContainer,
//   EmloyeesTitle,
//   InputsContainer,
//   ButtonContainer,
//   EmloyeesCotainer,
// } from "./styles";
// import Input from "components/Input/Input";
// import Button from "components/Button/Button";

// function EmployeeForm() {
//   const schema = Yup.object().shape({
//     [EMPLOYEES_FORM_NAMES.NAME]: Yup.string()
//       .required("Field name is required")
//       .typeError("Name must be String")
//       .test(
//         "Check min name value length",
//         "Min 2 symbols",
//         (value) => value.length >= 2
//       )
//       .test(
//         "Check max name value length",
//         "Max 50 symbols",
//         (value) => value.length <= 50
//       )
//       .matches(/^[A-Za-zА]+$/, "Must be chars"),

//     [EMPLOYEES_FORM_NAMES.SERNAME]: Yup.string()
//       .required("Field sername is required")
//       .typeError("Sername must be string")
//       .test(
//         "Check sername value length",
//         "Max symbols 15",
//         (value) => value.length <= 15
//       )
//       .matches(/^[A-Za-zА]+$/, "Must be chars"),

//     [EMPLOYEES_FORM_NAMES.AGE]: Yup.number()
//       .optional()
//       .typeError("Age must be number")
//       .min(18)
//       .max(80),

//     [EMPLOYEES_FORM_NAMES.POSITION]: Yup.string()
//       .required("Position name is required")
//       .typeError("Position must be symbol")
//       .test(
//         "Check position value length",
//         "Max symbols 30",
//         (value) => value.length <= 30
//       )
//       .matches(/^[A-Za-zА]+$/, "Must be chars"),

//     [EMPLOYEES_FORM_NAMES.RULES]: Yup.boolean()
//       .required("Important field to fill out")
//       .oneOf([true], "You must accept the rules"),
// >>>>>>> main
//   });

//   const formik = useFormik({
//     initialValues: {
// <<<<<<< homework12
//       [EMPLOYEE_FIELD_NAMES.NAME]: "",
//       [EMPLOYEE_FIELD_NAMES.SURNAME]: "",
//       [EMPLOYEE_FIELD_NAMES.AGE]: "",
//       [EMPLOYEE_FIELD_NAMES.JOB_TITLE]: "",
//       [EMPLOYEE_FIELD_NAMES.AGREEMENT]: false,
//     } as EmployeeFormValue,
//     validationSchema,
//     validateOnChange: false,
//     onSubmit: (values: EmployeeFormValue) => {
//       console.table(values);
// =======
//       [EMPLOYEES_FORM_NAMES.NAME]: "",
//       [EMPLOYEES_FORM_NAMES.SERNAME]: "",
//       [EMPLOYEES_FORM_NAMES.AGE]: "",
//       [EMPLOYEES_FORM_NAMES.POSITION]: "",
//       [EMPLOYEES_FORM_NAMES.RULES]: false,
//     } as EmployeeFormValue,

//     validationSchema: schema,
//     validateOnChange: false,

//     onSubmit: (values: EmployeeFormValue) => {
//       console.log(values);
// >>>>>>> main
//     },
//   });

//   return (
//     <EmployeeFormContainer onSubmit={formik.handleSubmit}>
// <<<<<<< homework12
//       <Input
//         name={EMPLOYEE_FIELD_NAMES.NAME}
//         label="Name*"
//         placeholder="Enter employee name"
//         id="employee_name_id"
//         value={formik.values[EMPLOYEE_FIELD_NAMES.NAME]}
//         onChange={formik.handleChange}
//         error={formik.errors[EMPLOYEE_FIELD_NAMES.NAME]}
//       />
//       <Input
//         name={EMPLOYEE_FIELD_NAMES.SURNAME}
//         label="Surname*"
//         placeholder="Enter employee surname"
//         id="employee_surname_id"
//         value={formik.values[EMPLOYEE_FIELD_NAMES.SURNAME]}
//         onChange={formik.handleChange}
//         error={formik.errors[EMPLOYEE_FIELD_NAMES.SURNAME]}
//       />
//       <Input
//         name={EMPLOYEE_FIELD_NAMES.AGE}
//         label="Age"
//         placeholder="Enter employee age"
//         id="employee_age_id"
//         value={formik.values[EMPLOYEE_FIELD_NAMES.AGE]}
//         onChange={formik.handleChange}
//         error={formik.errors[EMPLOYEE_FIELD_NAMES.AGE]}
//       />
//       <Input
//         name={EMPLOYEE_FIELD_NAMES.JOB_TITLE}
//         label="Job title*"
//         placeholder="Enter employee job title"
//         id="employee_job_id"
//         value={formik.values[EMPLOYEE_FIELD_NAMES.JOB_TITLE]}
//         onChange={formik.handleChange}
//         error={formik.errors[EMPLOYEE_FIELD_NAMES.JOB_TITLE]}
//       />
//       <CheckboxContainer>
//         <Checkbox
//           type="checkbox"
//           id="agree_id"
//           name={EMPLOYEE_FIELD_NAMES.AGREEMENT}
//           onChange={formik.handleChange}
//           checked={formik.values[EMPLOYEE_FIELD_NAMES.AGREEMENT]}
//         />
//         <CheckboxLabel htmlFor="agree_id">I Agree</CheckboxLabel>
//       </CheckboxContainer>
//       <Button
//         name="Create"
//         type="submit"
//         disabled={!formik.values[EMPLOYEE_FIELD_NAMES.AGREEMENT]}
//       />
// =======
<!--       <EmloyeesTitle>Employee Form</EmloyeesTitle>
      <EmloyeesCotainer>
        <InputsContainer>
          <Input
            name={EMPLOYEES_FORM_NAMES.NAME}
            id="user_name"
            placeholder="Enter your name"
            label="Name"
            value={formik.values[EMPLOYEES_FORM_NAMES.NAME]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEES_FORM_NAMES.NAME]}
          />
          <Input
            name={EMPLOYEES_FORM_NAMES.SERNAME}
            id="user_sername"
            placeholder="Enter your sername"
            label="Sername"
            value={formik.values[EMPLOYEES_FORM_NAMES.SERNAME]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEES_FORM_NAMES.SERNAME]}
          />
          <Input
            name={EMPLOYEES_FORM_NAMES.AGE}
            id="user_age"
            placeholder="Enter your age"
            label="Age"
            value={formik.values[EMPLOYEES_FORM_NAMES.AGE]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEES_FORM_NAMES.AGE]}
          />
          <Input
            name={EMPLOYEES_FORM_NAMES.POSITION}
            id="user_position"
            placeholder="Enter your position"
            label="Position"
            value={formik.values[EMPLOYEES_FORM_NAMES.POSITION]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEES_FORM_NAMES.POSITION]}
          />
          <Input
            name={EMPLOYEES_FORM_NAMES.RULES}
            id="rules_of_use"
            onChange={formik.handleChange}
            type="checkbox"
            label="I accept the rules"
            error={formik.errors[EMPLOYEES_FORM_NAMES.RULES]}
            checked={formik.values[EMPLOYEES_FORM_NAMES.RULES]}
          />
        </InputsContainer>
      </EmloyeesCotainer>
      <ButtonContainer>
        <Button name="Login" type="submit" />
      </ButtonContainer> -->
<!-- >>>>>>> main
    </EmployeeFormContainer>
  );
}

export default EmployeeForm; -->
