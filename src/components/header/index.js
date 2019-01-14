import React from 'react';
import LogoSVG from '../../assets/svg/icons/logo.svg';
import MenuSVG from '../../assets/svg/icons/menu.svg';
import CloseSVG from '../../assets/svg/icons/close.svg';
import useToggle from '../../utils/useToggle';
import {
  HeaderWrapper,
  HeaderBar,
  LogoWrapper,
  Logo,
  MenuControl,
  StyledMenuSVG,
  MenuWrapper,
} from './styles';

const Header = () => {
  const [isOpen, openState] = useToggle(false);
  return (
    <>
      <HeaderWrapper>
        <HeaderBar>
          <LogoWrapper>
            <Logo src={LogoSVG} cacheGetRequests />
          </LogoWrapper>
          <MenuControl type="button" onClick={openState} active={isOpen}>
            <StyledMenuSVG src={MenuSVG} />
          </MenuControl>
        </HeaderBar>
      </HeaderWrapper>
      <MenuWrapper active={isOpen}>
        <MenuControl type="button" onClick={openState} active={isOpen}>
          <StyledMenuSVG src={CloseSVG} />
        </MenuControl>
        <ul className="row unbulleted ">
          <li>
            <a
              href="https://england.shelter.org.uk/housing_advice"
              id="test-24462"
            >
              Housing advice
            </a>
            <ul className="unbulleted subnav js-subnavbar">
              <div className="row">
                <li className="js-subnav js-active">
                  <a href="https://england.shelter.org.uk/housing_advice/homelessness">
                    Homelessness
                  </a>
                </li>
                <li className="js-subnav js-active">
                  <a href="https://england.shelter.org.uk/housing_advice/private_renting">
                    Private renting
                  </a>
                </li>
                <li className="js-subnav js-active">
                  <a href="https://england.shelter.org.uk/housing_advice/tenancy_deposits">
                    Tenancy deposits
                  </a>
                </li>
                <li className="js-subnav js-active">
                  <a href="https://england.shelter.org.uk/housing_advice/benefits">
                    Benefits
                  </a>
                </li>
                <li className="js-subnav js-active">
                  <a href="https://england.shelter.org.uk/housing_advice/council_housing_association">
                    Council housing
                  </a>
                </li>
                <li className="js-subnav js-active">
                  <a href="https://england.shelter.org.uk/housing_advice/eviction">
                    Eviction
                  </a>
                </li>
                <li className="js-subnav js-active">
                  <a href="https://england.shelter.org.uk/housing_advice/repairs">
                    Repairs
                  </a>
                </li>
                <li className="js-subnav js-active">
                  <a href="https://england.shelter.org.uk/housing_advice/money_problems_and_energy_costs">
                    Energy costs
                  </a>
                </li>
                <li className="js-subnav js-active">
                  <a href="https://england.shelter.org.uk/housing_advice/repossession">
                    Repossession
                  </a>
                </li>
              </div>
            </ul>
          </li>
          <li>
            <a
              href="https://england.shelter.org.uk/get_help"
              id="js-main-nav-get-help"
            >
              Get help
            </a>
          </li>
          <li>
            <a
              href="https://england.shelter.org.uk/support_us"
              id="test-1169133"
            >
              Support us
            </a>
          </li>
          <li>
            <a
              href="https://england.shelter.org.uk/what_we_do"
              id="test-1385719"
            >
              What we do
            </a>
          </li>

          <li className="secondary">
            <a href="https://england.shelter.org.uk/professional_resources">
              Professionals
            </a>
          </li>
          <li className="secondary">
            <a href="http://scotland.shelter.org.uk">Scotland</a>
          </li>
        </ul>
      </MenuWrapper>
    </>
  );
};

export default Header;
