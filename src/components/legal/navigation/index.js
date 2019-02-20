import React from 'react';
import PropTypes from 'prop-types';

const LegalNavigation = ({ hierarchy, page }) => {
  const activeMenu = () => {
    Object.keys(hierarchy).forEach(parentPage => {
      // parentPage.children.find(child => page.slug === parent.slug);
    });
  };

  // const SecondLevel = ({ item }) => {
  //   console.log('item', item);
  //   return (
  //     <ul>
  //       {item.map(item => (
  //         <li>{item.label}</li>
  //       ))}
  //     </ul>
  //   );
  // };

  // SecondLevel.propTypes = {
  //   item: PropTypes.object,
  // };

  // const MenuItem = ({ item }) => {
  //   console.log('items', item);
  //   if (item.children) {
  //     return (
  //       <li>
  //         {item.label}
  //         <Menu items={item.children} />
  //       </li>
  //     );
  //   }
  //   return <li>{item.label}</li>;
  // };

  // MenuItem.propTypes = {
  //   item: PropTypes.object,
  // };

  const Menu = ({ items }) => {
    console.log('woo', hierarchy);

    return (
      <ul>
        {Object.keys(hierarchy).map(key => {
          console.log('parent', hierarchy[key]);
          return <li>{/* <MenuItem item={hierarchy[key]} /> */}</li>;
        })}
      </ul>
    );
  };

  Menu.propTypes = {
    items: PropTypes,
  };

  return (
    <div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

LegalNavigation.propTypes = {
  hierarchy: PropTypes.object,
  page: PropTypes.object,
};
export default LegalNavigation;
