import { useState } from "react";
import "./Accordion.css";

/**
 * Accordion component
 * whose headers can be collapsed
 * and expanded independently
 */
const AccordionHeader = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section>
      <h3 onClick={() => setOpen(!isOpen)}>{title}</h3>
      {isOpen && <p>{children}</p>}
    </section>
  );
};

const Accordion = ({ items }) => (
  <div>
    {items.map((item) => (
      <AccordionHeader key={item.title} title={item.title}>
        {item.content}
      </AccordionHeader>
    ))}
  </div>
);
export default Accordion;
