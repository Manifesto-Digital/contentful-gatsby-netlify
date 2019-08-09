import React from 'react';
import PropTypes from 'prop-types';
import { richTextPropTypes } from '../../prop-types';
import RichText from '../rich-text';
import { Stat, Title } from './styles';

const SingleStat = ({ info, type, index }) => {
  const { title, subtitle, text } = info;

  return (
    <Stat cardType={type} index={index}>
      <Title>
        {title}
        {subtitle && (
          <>
            <br /> <span>{subtitle}</span>
          </>
        )}
      </Title>
      <RichText richText={text} />
    </Stat>
  );
};

SingleStat.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    text: PropTypes.shape(richTextPropTypes).isRequired,
  }),
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default SingleStat;
