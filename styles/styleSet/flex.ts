export type FlexType =
    'colCenter' | 'colLeft' | 'colRight' |
    'rowAround' | 'rowAroundMiddle' | 'rowAroundBottom' |
    'rowBetween' | 'rowBetweenMiddle' | 'rowBetweenBottom' |
    'rowLeft' | 'rowLeftMiddle' |
    'rowRight' | 'rowRightMiddle' |
    'rowCenter' | 'rowCenterMiddle'

const flex = {
    colCenter: `
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
    colLeft: `
      display: flex;
      flex-direction: column;
      align-items: start;
    `,
    colRight: `
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    `,
    rowAround: `
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: start;
    `,
    rowAroundMiddle: `
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    `,
    rowAroundBottom: `
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-end;
    `,
    rowBetween: `
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: start;
    `,
    rowBetweenMiddle: `
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `,
    rowBetweenBottom: `
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    `,
    rowLeft: `
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: start;
    `,
    rowLeftMiddle: `
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
    `,
    rowRight: `
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: start;
    `,
    rowRightMiddle: `
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    `,
    rowCenter: `
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: start;
    `,
    rowCenterMiddle: `
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `,
  }

  export default flex