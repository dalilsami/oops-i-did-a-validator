export default function comparingRule(greater, key) {
  return function (value, name, ruleValue) {
    if (greater) {
      if ((key ? value[key] : value) > ruleValue) {
        throw new Error(`${name}${key ? `.${key}` : ""} should be under ${ruleValue} included`)
      }
    } else {
      if ((key ? value[key] : value) < ruleValue) {
        throw new Error(`${name}${key ? `.${key}` : ""} should be over ${ruleValue} included`)
      }
    }
  }
}