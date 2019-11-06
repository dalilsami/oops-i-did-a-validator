export default function patchable(value, name, ruleValue) {
  if (value !== undefined && !ruleValue) {
    throw new Error(`${name} unpatchable`)
  }
}
