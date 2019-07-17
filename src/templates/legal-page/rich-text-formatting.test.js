import React from 'react';
import { shallow } from 'enzyme';
import {
  handleBracketsInRichText,
  createFootnotes,
} from './rich-text-formatting';

const richTextWithSquareBracket = {
  data: {},
  content: [
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            'A landlord who is contractually obliged to repair or maintain a property owes a duty of care to anybody who could reasonably be affected by certain defects. Landlords have a general duty to take reasonable care when building or carrying out work to a property to avoid defects or damage to the property.[AC Billings and Son v Riden (1957) 3 All ER 1 and Rimmer v Liverpool City Council (1985) QBD, (1984) 12 HLR 23, CA.] ',
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
  ],
  nodeType: 'document',
};
const richText = {
  data: {},
  content: [
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            'If damage does occur, this could give grounds for an action for negligence or breach of the Defective Premises Act 1972. For more information see the section on Non-contractual rights.',
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
  ],
  nodeType: 'document',
};

export const tableOfContents = [
  {
    textContent: {
      json: richTextWithSquareBracket,
      title: 'title 1',
    },
  },
  {
    textContent: {
      json: richText,
      title: 'title 2',
    },
  },
  {
    textContent: {
      json: richTextWithSquareBracket,
      title: 'title 3',
    },
  },
];

it('replaces the square brackets with anchor links, and triggers updates upon detection of square brackets', () => {
  const updateReferenceList = jest.fn();
  const updateCount = jest.fn();
  const rawText =
    '[s.4 Defective Premises Act 1972.] Landlords also have a general duty to take reasonable care when building or carrying out work to a property to avoid danger of injury to the occupier.[AC Billings and Son v Riden (1957) 3 All ER 1 and Rimmer v Liverpool City Council (1985) QBD, (1984) 12 HLR 23, CA.] If injury does occur, this could give grounds for an action for negligence or breach of the Defective Premises Act 1972. For more information see the section on';
  const modifiedContent = handleBracketsInRichText(
    rawText,
    0,
    updateReferenceList,
    updateCount
  );

  expect(updateReferenceList.mock.calls.length).toBe(2);
  expect(updateCount.mock.calls[0][0]).toBe(2);

  const wrapper = shallow(<div>{modifiedContent}</div>);
  wrapper.find('a').forEach((link, i) => {
    expect(link.text()).toEqual(`[${i + 1}]`);
  });
});

it('returns the correct array of footnotes and array of content to render', () => {
  const [modifiedContent, footnotes] = createFootnotes(tableOfContents);

  expect(modifiedContent.length).toEqual(3);
  expect(footnotes[0]).toEqual(
    'AC Billings and Son v Riden (1957) 3 All ER 1 and Rimmer v Liverpool City Council (1985) QBD, (1984) 12 HLR 23, CA.'
  );
  expect(footnotes[1]).toEqual(
    'AC Billings and Son v Riden (1957) 3 All ER 1 and Rimmer v Liverpool City Council (1985) QBD, (1984) 12 HLR 23, CA.'
  );
});
