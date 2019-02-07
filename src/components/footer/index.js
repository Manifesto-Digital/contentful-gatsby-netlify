import React from 'react';
import LogoSVG from '../../assets/svg/icons/logo.svg';
import Icon from '../share-block/icon';
import { consistentString } from '../../utils/content-formatting';
import { Container } from '../styled/containers';
import {
  Wrapper,
  Top,
  Social,
  Menus,
  Angle,
  Bottom,
  BottomInner,
  Text,
  LogoWrapper,
  Logo,
} from './styles';

const Footer = () => (
  <Wrapper>
    <Top>
      <Container>
        <Menus>
          <Social>
            <Icon icon={consistentString('facebook')} />
            <Icon icon={consistentString('twitter')} />
            <Icon icon={consistentString('linkedin')} />
          </Social>
          <ul className="footer-nav--primary unbulleted">
            <li>
              <a href="https://england.shelter.org.uk/what_we_do">What we do</a>
              <ul className="unbulleted">
                <li>
                  <a href="https://england.shelter.org.uk/what_we_do/our_impact">
                    How we make a difference
                  </a>
                </li>
                <li>
                  <a href="./?a=1152552">Our vision</a>
                </li>
                <li>
                  <a href="//media.shelter.org.uk/">Media</a>
                </li>
                <li>
                  <a href="//england.shelter.org.uk/professional_resources/shelter_training">
                    Shelter Training
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="footer-nav--primary unbulleted">
            <li>
              <a href="//england.shelter.org.uk/support_us">Support us</a>
              <ul className="unbulleted">
                <li>
                  <a href="//england.shelter.org.uk/support_us/campaigns">
                    Campaign with us
                  </a>
                </li>
                <li>
                  <a href="//england.shelter.org.uk/support_us/volunteer">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="https://england.shelter.org.uk/what_we_do/work_with_shelter">
                    Jobs
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="footer-nav--primary unbulleted">
            <li>
              <a href="//england.shelter.org.uk/contact_us">
                Help with our site
              </a>
              <ul className="unbulleted">
                <li>
                  <a href="//england.shelter.org.uk/contact_us/legal_disclaimer_and_copyright">
                    Legal
                  </a>
                </li>
                <li>
                  <a href="//england.shelter.org.uk/contact_us/privacy">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="//england.shelter.org.uk/contact_us/cookies">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="//england.shelter.org.uk/contact_us">Feedback</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="footer-nav--primary unbulleted">
            <li>
              <a href="//england.shelter.org.uk/get_help">Get help</a>
              <ul className="unbulleted">
                <li>
                  <a href="//england.shelter.org.uk/contact_us">
                    Supporter and corporate contacts
                  </a>
                </li>

                <li>
                  <a href="//england.shelter.org.uk/donate/mobile_giving_terms_and_conditions">
                    Manage mobile subscriptions
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Menus>
      </Container>
    </Top>
    <Bottom>
      <Angle />
      <Container>
        <BottomInner>
          <Text>
            Shelter, the National Campaign for Homeless People Limited. Charity
            number: 263710 (England and Wales), SC002327 (Scotland). Company
            number: 1‌038133. 88 Old Street, London, EC1V 9HU. Authorised and
            regulated by the Financial Conduct Authority.
          </Text>
          <LogoWrapper to="/">
            <Logo src={LogoSVG} cacheGetRequests />
          </LogoWrapper>
        </BottomInner>
      </Container>
    </Bottom>
  </Wrapper>
);

export default Footer;
