// JSX factory function for creating markdown-aware element trees

export function md(type, props, ...children) {
  const flatChildren = children.flat(Infinity).filter(child => child !== null && child !== undefined);

  return {
    type,
    props: props || {},
    children: flatChildren
  };
}
