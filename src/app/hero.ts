export class FilteredList<T> {
  private filter: T;
  constructor(filter: (v: T) => boolean) {
    console.log(filter);
  }
  string(str) {
    return str;
  }
}


