import PropTypes from 'prop-types';
import { Heading } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <section>
      <Heading>{title}</Heading>
      {children}
    </section>
  );
};

Section.prototypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
