import { bracketsToArray } from './bracketsToArray';

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

it('returns an array containing all text surrounded by brackets', () => {
  expect(bracketsToArray(tableOfContents)).toEqual([
    '[s.3 Public Order Act 1986.]',
    '[s.2 Public Order Act 1986.]',
    '[s.2 Public Order Act 1986.]',
    '[s.4A(1) Public Order Act 1986.]',
    '[s.3 Public Order Act 1986.]',
    '[s.2 Public Order Act 1986.]',
    '[s.2 Public Order Act 1986.]',
    '[s.4A(1) Public Order Act 1986.]',
  ]);
});
