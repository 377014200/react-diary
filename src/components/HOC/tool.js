export function signComponentName(HocName, component) {
   return `${HocName} (${ component.displayName || component.name || 'Component' })`
}