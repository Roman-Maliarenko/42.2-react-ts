export interface EmployeeFormValue {
  user_name: string;
  user_sername: string;
  user_age: string;
  user_position: string;
  rules_of_use: boolean;
}

export enum EMPLOYEES_FORM_NAMES {
  NAME = "user_name",
  SERNAME = "user_sername",
  AGE = "user_age",
  POSITION = "user_position",
  RULES = "rules_of_use",
}
