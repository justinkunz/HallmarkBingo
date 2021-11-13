declare module 'arrayfriend' {
  export interface ArrayFriendMethods {
    shuffle: () => any[];
    batch: (count: number) => Array<any[]>;
  }

  export default function (...array: any[]): ArrayFriendMethods;
}
