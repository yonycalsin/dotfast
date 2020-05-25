// import { objectToFormat } from '../lib/object-to-format';

// /**
//  * FROM: {size: 7, unit: "GB", format: "7GB"}
//  * TO: 7GB
//  */
// test('object to 7GB', () => {
//    expect(
//       objectToFormat({
//          size: 7,
//          unit: 'GB',
//          format: '7GB',
//       }),
//    ).toBe('7GB');
// });

// /**
//  * FROM: {size: 4, unit: "MB", format: "4MB"}, {separator: '-'}
//  * TO: 4-MB
//  */
// test(' to 4-MB', () => {
//    expect(
//       objectToFormat(
//          {
//             size: 4,
//             unit: 'MB',
//             format: '4MB',
//          },
//          {
//             separator: '-',
//          },
//       ),
//    ).toBe('4-MB');
// });
