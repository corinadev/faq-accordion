import { useState } from "react";
import "./Accordion.css";

/**
 * Accordion component
 * who only allows expanding
 * one heading at a time
 */
const AccordionHeader = ({ title, isOpen, onToggle, children }) => {
  return (
    <section>
      <h3 onClick={onToggle}>{title}</h3>
      {isOpen && <p>{children}</p>}
    </section>
  );
};

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleOnToggle = (index) => {
    if (index === expandedIndex) {
      // If the user clicked the already open header,
      // close it
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
  return (
    <div>
      {items.map((item, index) => (
        <AccordionHeader
          key={item.title}
          title={item.title}
          isOpen={index === expandedIndex}
          onToggle={() => handleOnToggle(index)}
        >
          {item.content}
        </AccordionHeader>
      ))}
    </div>
  );
};

export default Accordion;
