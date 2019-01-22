import React from 'react';

const Pagination = () => (
  <div>
    <a href="">
      <i className="fa fa-chevron-left" aria-hidden="true" />
      Previous
    </a>
    <ul>
      <li>1</li>
      <li>
        <a href="http://media.shelter.org.uk/press_releases?result_1239648_result_page=2">
          2
        </a>
      </li>
      <li>
        <a href="http://media.shelter.org.uk/press_releases?result_1239648_result_page=3">
          3
        </a>
      </li>
      <li>
        <a href="http://media.shelter.org.uk/press_releases?result_1239648_result_page=4">
          4
        </a>
      </li>
    </ul>
    <a href="http://media.shelter.org.uk/press_releases?result_1239648_result_page=2">
      <i className="fa fa-chevron-right" aria-hidden="true" />
      Next
    </a>
  </div>
);

export default Pagination;
