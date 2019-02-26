import { bracketsToLink } from './bracketsToLink';

export const tableOfContents = [
  {
    textContent: {
      childContentfulRichText: {
        html:
          '<p>This Act governs public order offences such as affray [s.3 Public Order Act 1986.](where a person threatens unlawful violence which would cause a reasonable person to fear for her / his safety) and violent disorder[s.2 Public Order Act 1986.](where three or more persons use or threaten violence which would cause a reasonable person to fear for her / his safety).Where three or more perpetrators use(or threaten to use) unlawful violence, each of the perpetrators is guilty of violent disorder.[s.2 Public Order Act 1986.]</p > <p>The Act also aims to combat racial hatred by introducing a number of offences, including using threatening, abusive or insulting words or behaviour and/or displaying any writing, sign or other visible representation which is threatening, abusive or insulting with intent to cause a person harassment, alarm or distress.[s.4A(1) Public Order Act 1986.]</p>',
      },
      title: 'Public Order Act 1986',
    },
  },
  {
    textContent: {
      childContentfulRichText: {
        html:
          '<p>This Act governs public order offences such as affray [s.3 Public Order Act 1986.](where a person threatens unlawful violence which would cause a reasonable person to fear for her / his safety) and violent disorder[s.2 Public Order Act 1986.](where three or more persons use or threaten violence which would cause a reasonable person to fear for her / his safety).Where three or more perpetrators use(or threaten to use) unlawful violence, each of the perpetrators is guilty of violent disorder.[s.2 Public Order Act 1986.]</p ><p>The Act also aims to combat racial hatred by introducing a number of offences, including using threatening, abusive or insulting words or behaviour and/or displaying any writing, sign or other visible representation which is threatening, abusive or insulting with intent to cause a person harassment, alarm or distress.[s.4A(1) Public Order Act 1986.]</p>',
      },
      title: 'Police and Criminal Evidence Act 1984',
    },
  },
];

it('returns an array that has all text surrounded by brackets returned as a numbered link', () => {
  expect(bracketsToLink(tableOfContents)).toEqual([
    '<p>This Act governs public order offences such as affray &nbsp;<a id="source-1" href="#reference-1">[1]</a>&nbsp;(where a person threatens unlawful violence which would cause a reasonable person to fear for her / his safety) and violent disorder&nbsp;<a id="source-2" href="#reference-2">[2]</a>&nbsp;(where three or more persons use or threaten violence which would cause a reasonable person to fear for her / his safety).Where three or more perpetrators use(or threaten to use) unlawful violence, each of the perpetrators is guilty of violent disorder.&nbsp;<a id="source-3" href="#reference-3">[3]</a>&nbsp;</p > <p>The Act also aims to combat racial hatred by introducing a number of offences, including using threatening, abusive or insulting words or behaviour and/or displaying any writing, sign or other visible representation which is threatening, abusive or insulting with intent to cause a person harassment, alarm or distress.&nbsp;<a id="source-4" href="#reference-4">[4]</a>&nbsp;</p>',
    '<p>This Act governs public order offences such as affray &nbsp;<a id="source-5" href="#reference-5">[5]</a>&nbsp;(where a person threatens unlawful violence which would cause a reasonable person to fear for her / his safety) and violent disorder&nbsp;<a id="source-6" href="#reference-6">[6]</a>&nbsp;(where three or more persons use or threaten violence which would cause a reasonable person to fear for her / his safety).Where three or more perpetrators use(or threaten to use) unlawful violence, each of the perpetrators is guilty of violent disorder.&nbsp;<a id="source-7" href="#reference-7">[7]</a>&nbsp;</p ><p>The Act also aims to combat racial hatred by introducing a number of offences, including using threatening, abusive or insulting words or behaviour and/or displaying any writing, sign or other visible representation which is threatening, abusive or insulting with intent to cause a person harassment, alarm or distress.&nbsp;<a id="source-8" href="#reference-8">[8]</a>&nbsp;</p>',
  ]);
});
