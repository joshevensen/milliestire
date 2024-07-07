export enum ButtonColors {
  Primary = 1,
  Secondary,
  Light,
  Danger,
}

export enum ButtonSizes {
  Small = 1,
  Medium,
  Large,
}

export enum ButtonTypes {
  Solid = 1,
  Outline,
  Text,
}

export enum HttpStatusCodes {
  OK = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  ValidationError = 422,
  UpgradeRequired = 426,
  TooManyRequests = 429,
  ServerError = 500,
  NotImplemented = 501,
}

export enum InputTypes {
  Hidden = "hidden",
  Text = "text",
  Date = "date",
  DateTime = "datetime",
  Multiline = "multiline",
  Select = "select",
  Checkbox = "checkbox",
  Number = "number",
  Email = "email",
  Phone = "phone",
  Password = "password",
}
