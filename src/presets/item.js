export default function item(value, name, ruleValue, instance) {
  value.forEach((d, i) => {
    instance.validate(value[i], `${name}.${i}`, ruleValue)
  })
}