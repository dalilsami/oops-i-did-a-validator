export default function match(value, name, ruleValue) {
  if (!(ruleValue instanceof RegExp
    ? ruleValue
    : new RegExp(ruleValue)
  ).test(value)) {
    throw new Error(`${name} not valid`)
  }
}