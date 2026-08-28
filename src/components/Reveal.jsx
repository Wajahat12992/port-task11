import useReveal from "../hooks/useReveal";

/**
 * Wraps children in a scroll-reveal animation.
 * `delay` (ms) lets sibling elements stagger their entrance.
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children }) {
  const ref = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
