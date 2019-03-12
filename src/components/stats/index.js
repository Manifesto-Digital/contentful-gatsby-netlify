import React from 'react';
import PropTypes from 'prop-types';
import { statsToArray } from './helpers';
import { Wrapper, Flex, StatRow } from './styles';
import { Container } from '../styled/containers';
import { consistentString } from '../../utils/content-formatting';
import SingleStat from './single-stat';
import { richTextPropTypes } from '../../prop-types';

const Stats = ({ data }) => {
  const statsInArray = statsToArray(data);
  if (!statsInArray || !statsInArray.length) return null;
  const { displayType } = data;
  const type = consistentString(displayType);

  if (type === 'grid') {
    // If grid is chosen then we are expecting 4 items that need to
    // be split into two rows due background colour breaking the container
    const firstRow = statsInArray.slice(0, 2);
    const secondRow = statsInArray.slice(2);
    const rows = [firstRow, secondRow];

    return (
      <Wrapper statType={type}>
        {rows.map((items, i) => (
          <StatRow alt={i === 0 || i === 3 ? 1 : 0} key={i}>
            <Container padding={false}>
              <Flex>
                {items.map((stat, index) => (
                  <SingleStat
                    key={index}
                    info={stat}
                    type={type}
                    index={index}
                  />
                ))}
              </Flex>
            </Container>
          </StatRow>
        ))}
      </Wrapper>
    );
  }

  // Will only show first 3 even if 4 are chosen
  const first3Stats = [...statsInArray].slice(0, 3);
  return (
    <Wrapper statType={type}>
      <StatRow alt>
        <Container padding={false}>
          <Flex>
            {first3Stats.map((stat, index) => (
              <SingleStat key={index} info={stat} type={type} index={index} />
            ))}
          </Flex>
        </Container>
      </StatRow>
    </Wrapper>
  );
};
Stats.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.oneOf(['Grid', 'Line']),
    stat1Title: PropTypes.string.isRequired,
    stat1Description: PropTypes.string,
    stat1Text: PropTypes.shape(richTextPropTypes).isRequired,
    stat2Title: PropTypes.string.isRequired,
    stat2Description: PropTypes.string,
    stat2Text: PropTypes.shape(richTextPropTypes).isRequired,
    stat3Title: PropTypes.string.isRequired,
    stat3Description: PropTypes.string,
    stat3Text: PropTypes.shape(richTextPropTypes).isRequired,
    stat4Title: PropTypes.string.isRequired,
    stat4Description: PropTypes.string,
    stat4Text: PropTypes.shape(richTextPropTypes).isRequired,
  }),
};

export default Stats;
