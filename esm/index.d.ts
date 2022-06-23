import React from 'react';
/**
 * Compose and memoize a list of non-falsy space-separated CSS class names from
 * an array or yields of a generator function.
 *
 * @param {React.DependencyList} deps (optional) A list of dependencies that when
 * changed, re-compute class names.
 *
 * @example Usage with a generator function
 * ```ts
 * // returns "btn btn-primary" for non-active states and "btn btn-primary btn-active"
 * // for active states
 * const [active, setActive] = useState(false);
 * const className = useComposedClassName(function*() {
 *  yield 'btn';
 *  yield 'btn-primary';
 *
 *  if (active) {
 *    yield 'btn-active';
 *  }
 * }, [active]);
 * ```
 *
 * @example Usage with an array
 * ```ts
 * // returns "btn btn-primary" for non-active states and "btn btn-primary btn-active"
 * // for active states
 * const [active, setActive] = useState(false);
 * const className = useComposedClassName([
 *  'btn',
 *  'btn-primary',
 *  active && 'btn-active',
 * ], [active]);
 * ```
 *
 * @returns {string} CSS generated class names
 */
export default function useComposedClassName(classNameGenerator: string[] | (() => Generator<string, void, unknown>), deps?: React.DependencyList): string;
