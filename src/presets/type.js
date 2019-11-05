export default function type(value, name, ruleValue) {
  const isString = typeof ruleValue === "string"

  if (isString
    ? typeof value !== ruleValue
    : !(value instanceof ruleValue)
  ) {
    throw new Error(`${name} is not ${isString ? ruleValue : ruleValue.name}`)
  }
}
