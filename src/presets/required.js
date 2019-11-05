export default function required(value, name, ruleValue) {
  if (ruleValue && value === undefined) {
    throw new Error(`${name} missing`)
  }
}