export default function values(value, name, ruleValue) {
  if (!ruleValue.includes(value)) {
    throw new Error(`${name} is invalid`)
  }
}