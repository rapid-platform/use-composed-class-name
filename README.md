# React Hook &mdash; `useComposedClassName`

Compose and memoize a list of non-falsy space-separated CSS class names from an array, or yields of a generator function.

This library has no dependencies.

```ts
function useComposedClassName(classNameGenerator: string[] | (() => Generator<string, void, unknown>), deps?: React.DependencyList): string;
```

## Examples

JS Generator function
```ts
// returns "btn btn-primary" for non-active states and "btn btn-primary btn-active"
// for active states
const [active, setActive] = useState(false);
const className = useComposedClassName(function*() {
    yield 'btn';
    yield 'btn-primary';
    if (active) {
        yield 'btn-active';
    }
}, [active]);
```

Truthy items in an array
```ts
// returns "btn btn-primary" for non-active states and "btn btn-primary btn-active"
// for active states
const [active, setActive] = useState(false);
const className = useComposedClassName([
    'btn',
    'btn-primary',
    active && 'btn-active',
], [active]);
```